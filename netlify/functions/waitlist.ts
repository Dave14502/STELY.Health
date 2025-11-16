import { google } from 'googleapis';

interface RequestBody {
  email: string;
}

interface ServiceAccount {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

export const handler = async (event: any) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body) as RequestBody;

    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address' }),
      };
    }

    // Get credentials from environment variable
    const credentialsJson = process.env.GOOGLE_SHEETS_CREDENTIALS;
    if (!credentialsJson) {
      console.error('Google Sheets credentials not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    const credentials: ServiceAccount = JSON.parse(credentialsJson);
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID || '1B1EUY73ufvhkHtFDl1dplxiDFWvzyglS38Ocye0E6Yc';
    const sheetName = 'Waitlist';

    // Create JWT client
    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    // Add email to spreadsheet
    const timestamp = new Date().toISOString();
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:B`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email, timestamp]],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Email added to waitlist',
        updatedCells: response.data.updates?.updatedCells,
      }),
    };
  } catch (error) {
    console.error('Waitlist error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }),
    };
  }
};
