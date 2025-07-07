import nodemailer from 'nodemailer';

// Verificación temporal - ELIMINAR en producción
console.log('Email user:', process.env.EMAIL_USER);
console.log('Email pass length:', process.env.EMAIL_PASS?.length);

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Verificar conexión
transporter.verify((error, success) => {
    if (error) {
        console.log('Error connecting to email service:', error);
    } else {
        console.log('Email service ready - connected to Gmail SMTP');
    }
});