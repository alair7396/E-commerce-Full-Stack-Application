const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Não permite emails duplicados
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Adiciona createdAt e updatedAt
});

const User = mongoose.model('User', userSchema);

module.exports = User;
