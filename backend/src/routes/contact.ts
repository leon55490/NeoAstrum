import express from 'express';
import { transporter } from '../config/nodemailer';

const router = express.Router();

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

router.post('/contact', async (req, res) => {
  try {
    console.log('Received form data:', req.body);

    const { name, email, reason, message }: ContactFormData = req.body;

    // Validación básica
    if (!name || !email || !reason || !message) {
      console.log('Validation failed - missing fields');
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son obligatorios'
      });
    }

    console.log('Attempting to send emails...');

    // Obtener la lista de emails del equipo
    const teamEmails = process.env.TEAM_EMAILS?.split(',') || [];
    console.log('Sending to team emails:', teamEmails);

    // Email para el equipo (ti y tu compañero)
    const teamMailOptions = {
      from: process.env.EMAIL_USER,
      to: teamEmails, // Array de emails
      subject: `🚀 Nuevo cliente potencial - ${reason}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6; margin: 0; font-size: 28px;">🎉 ¡Nuevo Cliente Potencial!</h1>
            <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 16px;">Alguien está interesado en nuestros servicios</p>
          </div>
          
          <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">📋 Información del Cliente</h2>
            
            <div style="margin: 15px 0;">
              <p style="margin: 8px 0;"><strong style="color: #374151;">👤 Nombre:</strong> <span style="color: #6b7280;">${name}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">📧 Email:</strong> <span style="color: #3b82f6;">${email}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #374151;">🎯 Motivo:</strong> <span style="color: #059669;">${reason}</span></p>
            </div>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">💬 Mensaje:</h3>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="margin: 0; color: #4b5563; line-height: 1.6;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 25px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              📅 Recibido el ${new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
              Este mensaje fue enviado desde el formulario de contacto de Neo Astrum
            </p>
          </div>
        </div>
      `,
    };

    // Email de confirmación para el cliente (sin cambios)
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Gracias por contactarnos - Neo Astrum',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">¡Gracias por contactarnos, ${name}!</h2>
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Resumen de tu consulta:</h3>
            <p><strong>Motivo:</strong> ${reason}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
          </div>
          <p>Saludos,<br>El equipo de Neo Astrum</p>
        </div>
      `,
    };

    // Enviar ambos emails
    await Promise.all([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    console.log('Emails sent successfully to team and client');

    res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente'
    });

  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

export default router;