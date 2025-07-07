import dotenv from 'dotenv';
dotenv.config(); // ← Esto debe ir ANTES de todo

import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares - CORS mejorado
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://127.0.0.1:5173',
        'https://neoastrum.netlify.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/api', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});