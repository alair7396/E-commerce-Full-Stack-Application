const mongoose = require('mongoose');
// Importar dependências
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Importar rotas
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Configurações
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json()); // Para permitir o envio de dados em formato JSON

// Rotas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Rota básica para teste
app.get('/api', (req, res) => {
    res.send('API is running...');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
