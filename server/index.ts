import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');
console.log('Loading .env file from:', envPath);

const result = dotenv.config({ path: envPath });
if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

// Import other modules after loading environment variables
import express from "express";
import { createServer } from 'http';
import cors from 'cors';
import router from './routes.js';
import { setupVite, serveStatic, log } from "./vite";

// Log environment variables for debugging
console.log('Environment variables loaded:');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MAILERSEND_API_KEY:', process.env.MAILERSEND_API_KEY ? '✅ Configurada' : '❌ No configurada');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Add logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Routes
app.use('/api', router);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('❌ Error:', err);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Setup Vite in development
if (process.env.NODE_ENV === "development") {
  setupVite(app, createServer(app));
} else {
  serveStatic(app);
}

// Start server
app.listen(port, () => {
  log(`🚀 Servidor iniciado en http://localhost:${port}`);
  log(`📧 MailerSend API Key: ${process.env.MAILERSEND_API_KEY ? '✅ Configurada' : '❌ No configurada'}`);
});
