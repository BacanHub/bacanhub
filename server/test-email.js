import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');
config({ path: envPath });

const API_KEY = process.env.MAILERSEND_API_KEY;
const DOMAIN = process.env.MAILERSEND_DOMAIN;
const RECIPIENT = process.env.MAILERSEND_RECIPIENTS;

if (!API_KEY || !DOMAIN || !RECIPIENT) {
  console.error('❌ Faltan variables de entorno necesarias');
  process.exit(1);
}

const emailData = {
  "from": {
    "email": `contact@${DOMAIN}`,
    "name": "BacanHub Contact"
  },
  "to": [
    {
      "email": RECIPIENT,
      "name": "Test Recipient"
    }
  ],
  "subject": "Test Email from BacanHub",
  "html": "<h1>Test Email</h1><p>This is a test email sent from BacanHub.</p>",
  "text": "Test Email\nThis is a test email sent from BacanHub."
};

console.log('📧 Enviando email de prueba...');
console.log('Configuración:', {
  from: emailData.from,
  to: emailData.to,
  subject: emailData.subject
});

// Primero, verificar el estado de supresión
fetch('https://api.mailersend.com/v1/suppressions', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('📊 Estado de supresiones:', data);
})
.catch(error => {
  console.error('❌ Error al verificar supresiones:', error);
});

// Luego, intentar enviar el email
fetch('https://api.mailersend.com/v1/email', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(emailData)
})
.then(response => response.json())
.then(data => {
  console.log('✅ Respuesta:', data);
  if (data.warnings) {
    console.log('⚠️ Advertencias detalladas:', JSON.stringify(data.warnings, null, 2));
  }
})
.catch(error => {
  console.error('❌ Error:', error);
});