const { google } = require("googleapis");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { date, time, name, email, phone } = JSON.parse(event.body);

    if (!date || !time) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Data e horário são obrigatórios." }),
      };
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.error("Erro: Credenciais não configuradas.");
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Erro de configuração no servidor.",
          details: "As credenciais do Google Sheets não foram configuradas no Netlify ou estão vazias.",
        }),
      };
    }

    // Normalização agressiva da chave privada para evitar erros de formatação no Netlify
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
        .replace(/"/g, "")     // Remove aspas duplas caso tenham sido coladas
        .replace(/\\n/g, "\n") // Converte o texto "\n" em quebras de linha reais
        .trim();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const SPREADSHEET_ID = "1S4qFVXOcjVU-cZGLo0EMn74GBYjmJsuBZyOJYHSbKFw";

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[date, time, name || "N/A", email || "N/A", phone || "N/A"]],
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ success: true, message: "Agendamento registrado com sucesso!" }),
    };
  } catch (error) {
    console.error("Erro detalhado:", error);

    let errorMessage = "Erro ao registrar agendamento.";
    let errorDetails = error.message;

    if (error.code === 403) {
      errorMessage = "Permissão negada.";
      errorDetails = "Certifique-se de que o e-mail da conta de serviço foi adicionado como 'Editor' na planilha.";
    } else if (error.code === 404) {
      errorMessage = "Planilha não encontrada.";
      errorDetails = "Verifique se o ID da planilha está correto.";
    }

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: errorMessage, details: errorDetails }),
    };
  }
};
