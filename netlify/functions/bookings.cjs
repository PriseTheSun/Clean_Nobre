const { google } = require("googleapis");

exports.handler = async (event, context) => {
  try {
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

    // Normalização da chave privada para evitar erros de formatação no Netlify
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
      .replace(/\\n/g, "\n")
      .replace(/"/g, "")
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

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A:B",
    });

    const rows = response.data.values || [];
    const bookings = rows.map(row => ({
      date: row[0],
      time: row[1]
    }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookings),
    };
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        error: "Erro ao buscar agendamentos.",
        details: error.message 
      }),
    };
  }
};
