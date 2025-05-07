import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { z } from 'zod';

// Validar la API key de MailerSend
const mailerSendApiKey = process.env.MAILERSEND_API_KEY;
const mailerSendDomain = process.env.MAILERSEND_DOMAIN;
const mailerSendRecipients = process.env.MAILERSEND_RECIPIENTS;

console.log('🔑 API Key configurada:', mailerSendApiKey ? '✅' : '❌');
console.log('🔑 API Key (primeros 10 caracteres):', mailerSendApiKey ? `${mailerSendApiKey.substring(0, 10)}...` : 'No configurada');
console.log('🌐 Dominio configurado:', mailerSendDomain ? '✅' : '❌');
console.log('📧 Destinatarios configurados:', mailerSendRecipients ? '✅' : '❌');

// Validación inicial de configuración
if (!mailerSendApiKey) {
  console.error('❌ MAILERSEND_API_KEY no está configurada en las variables de entorno');
  console.error('Variables de entorno disponibles:', Object.keys(process.env));
  throw new Error('MAILERSEND_API_KEY no está configurada');
}

if (!mailerSendDomain) {
  console.error('❌ MAILERSEND_DOMAIN no está configurado en las variables de entorno');
  throw new Error('MAILERSEND_DOMAIN no está configurado');
}

if (!mailerSendRecipients) {
  console.error('❌ MAILERSEND_RECIPIENTS no está configurado en las variables de entorno');
  throw new Error('MAILERSEND_RECIPIENTS no está configurado');
}

// Validar formato de la API key
if (!mailerSendApiKey.startsWith('mlsn.')) {
  console.error('❌ MAILERSEND_API_KEY tiene un formato inválido');
  throw new Error('MAILERSEND_API_KEY tiene un formato inválido');
}

// Configurar MailerSend
const mailerSend = new MailerSend({
  apiKey: mailerSendApiKey,
});

const contactSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  message: z.string().min(1, 'El mensaje es requerido'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function sendContactEmail(data: ContactFormData) {
  try {
    console.log('📝 Validando datos del formulario:', data);
    
    // Validar los datos
    const validatedData = contactSchema.parse(data);
    console.log('✅ Datos validados correctamente');

    // Configurar el remitente
    const sentFrom = new Sender(`contact@${mailerSendDomain}`, 'BacanHub Contact');
    console.log('📤 Remitente configurado:', {
      email: sentFrom.email,
      name: sentFrom.name
    });

    // Configurar los destinatarios
    const recipients = mailerSendRecipients!.split(',').map(email => 
      new Recipient(email.trim(), email.split('@')[0])
    );
    console.log('📥 Destinatarios configurados:', recipients.map(r => ({
      email: r.email,
      name: r.name
    })));

    // Crear el email
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('Nuevo mensaje de contacto de BacanHub')
      .setHtml(`
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validatedData.message}</p>
      `)
      .setText(`
        Nuevo mensaje de contacto
        Nombre: ${validatedData.name}
        Email: ${validatedData.email}
        Mensaje: ${validatedData.message}
      `);
    console.log('📧 Email configurado:', {
      from: emailParams.from,
      to: emailParams.to,
      subject: emailParams.subject
    });

    // Enviar el email
    console.log('🚀 Enviando email...');
    const response = await mailerSend.email.send(emailParams);
    console.log('✅ Email enviado:', {
      statusCode: response.statusCode,
      headers: response.headers,
      body: response.body
    });

    // Verificar advertencias
    if (response.body?.warnings) {
      console.log('⚠️ Advertencias de MailerSend:', response.body.warnings);
    }

    // Verificar límites de API
    const remainingQuota = response.headers['x-apiquota-remaining'];
    const quotaReset = response.headers['x-apiquota-reset'];
    console.log('📊 Estado de la cuota:', {
      remaining: remainingQuota,
      reset: quotaReset
    });

    return { 
      success: true, 
      message: 'Email enviado correctamente',
      details: {
        statusCode: response.statusCode,
        warnings: response.body?.warnings,
        quota: {
          remaining: remainingQuota,
          reset: quotaReset
        }
      }
    };
  } catch (error: any) {
    console.error('❌ Error al enviar email:', error);
    
    // Manejar errores específicos de MailerSend
    if (error.statusCode === 401) {
      console.error('❌ Error de autenticación con MailerSend. Verifica la API key.');
      return { 
        success: false, 
        message: 'Error de autenticación con el servicio de email',
        error: 'API key inválida o expirada'
      };
    }

    if (error.statusCode === 202 && error.body?.warnings) {
      console.warn('⚠️ Email enviado con advertencias:', error.body.warnings);
      return {
        success: true,
        message: 'Email enviado con advertencias',
        warnings: error.body.warnings
      };
    }

    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Error de validación', 
        errors: error.errors 
      };
    }

    return { 
      success: false, 
      message: 'Error al enviar el email',
      error: error.message || 'Error desconocido'
    };
  }
} 