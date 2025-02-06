import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conexión a MongoDB

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((err) => console.error('Error conectando a MongoDB Atlas:', err));;

// Rutas
app.use('/users', userRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});