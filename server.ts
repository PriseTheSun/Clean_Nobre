import express from "express";
import { createServer as createViteServer } from "vite";
import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Google Sheets API Setup
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const SPREADSHEET_ID = "1S4qFVXOcjVU-cZGLo0EMn74GBYjmJsuBZyOJYHSbKFw";

  // API Route to fetch bookings
  app.get("/api/bookings", async (req, res) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: "A:B", // Date and Time columns
      });

      const rows = response.data.values || [];
      // Format: [{ date: '25/03/2026', time: '09:00' }, ...]
      const bookings = rows.map(row => ({
        date: row[0],
        time: row[1]
      }));

      res.json(bookings);
    } catch (error: any) {
      console.error("Erro ao buscar agendamentos:", error);
      res.status(500).json({ error: "Erro ao buscar agendamentos." });
    }
  });

  // API Route for Booking
  app.post("/api/book", async (req, res) => {
    const { date, time, name, email, phone } = req.body;

    if (!date || !time) {
      return res.status(400).json({ error: "Data e horário são obrigatórios." });
    }

    // Check for required environment variables
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.error("Erro: GOOGLE_SERVICE_ACCOUNT_EMAIL ou GOOGLE_PRIVATE_KEY não configurados.");
      return res.status(500).json({ 
        error: "Erro de configuração no servidor.", 
        details: "As credenciais do Google Sheets não foram configuradas nos Segredos (Secrets) do AI Studio." 
      });
    }

    try {
      // Append to Google Sheet
      // Using a more generic range like 'A:E' or 'Sheet1!A:E'
      // If 'Página1' is the issue, this might fix it.
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "A:E", // Targets the first sheet automatically
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[date, time, name || "N/A", email || "N/A", phone || "N/A"]],
        },
      });

      res.json({ success: true, message: "Agendamento registrado com sucesso!" });
    } catch (error: any) {
      console.error("Erro detalhado ao registrar no Google Sheets:", error);
      
      let errorMessage = "Erro ao registrar agendamento.";
      let errorDetails = error.message;

      if (error.code === 403) {
        if (error.message.includes("Google Sheets API has not been used")) {
          errorMessage = "API do Google Sheets Desativada.";
          errorDetails = "Você precisa ativar a API no seu console do Google Cloud. Use o link: https://console.developers.google.com/apis/api/sheets.googleapis.com/overview?project=540748812717";
        } else {
          errorMessage = "Permissão negada.";
          errorDetails = "Certifique-se de que o e-mail da conta de serviço foi adicionado como 'Editor' na sua planilha.";
        }
      } else if (error.code === 404) {
        errorMessage = "Planilha não encontrada.";
        errorDetails = "Verifique se o ID da planilha está correto.";
      }

      res.status(500).json({ 
        error: errorMessage, 
        details: errorDetails 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
