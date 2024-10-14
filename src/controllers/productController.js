const Product = require('../models/productModel');

// Criar um novo produto
exports.createProduct = async (req, res) => {
    const { name, price, description, imageUrl } = req.body;

    try {
        const newProduct = await Product.create({ name, price, description, imageUrl });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obter todos os produtos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obter um produto por ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Atualizar um produto
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Deletar um produto
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
