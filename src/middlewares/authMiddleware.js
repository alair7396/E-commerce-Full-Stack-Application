const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'your_jwt_secret'; // Use uma variável de ambiente para segurança

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extrai o token do cabeçalho Authorization
    if (!token) return res.sendStatus(401); // Não autorizado

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // Proibido
        req.user = user; // Adiciona o usuário ao request
        next(); // Passa para o próximo middleware
    });
};

module.exports = { authenticateToken };
