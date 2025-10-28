import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/taskRoutes.js';

// Carrega variáveis de ambiente
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', router);


// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'API To-Do List rodando!'})
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
