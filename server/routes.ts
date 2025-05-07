import express from 'express';
import { sendContactEmail, ContactFormData } from './email.js';
import { z } from 'zod';

const router = express.Router();

// Middleware para parsear JSON
router.use(express.json());

// Ruta para el formulario de contacto
router.post('/contact', async (req, res) => {
  try {
    console.log('📨 Recibiendo solicitud de contacto:', {
      body: req.body,
      headers: req.headers,
      method: req.method,
      url: req.url
    });
    
    console.log('🚀 Iniciando envío de email...');
    const result = await sendContactEmail(req.body as ContactFormData);
    console.log('📬 Resultado del envío:', result);
    
    if (result.success) {
      console.log('✅ Email enviado correctamente');
      res.json(result);
    } else {
      console.error('❌ Error al enviar email:', result.message);
      res.status(400).json(result);
    }
  } catch (error) {
    console.error('❌ Error en el servidor:', error);
    res.status(500).json({
      success: false,
      message: 'Error al procesar la solicitud',
      error: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
});

export default router;
