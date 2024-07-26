const express = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

const router = express.Router();

// Rotas de usuários
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);  
router.delete('/users/:id', userController.deleteUser);  

// Rotas de produtos
router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);  
router.delete('/products/:id', productController.deleteProduct); 

module.exports = router;
