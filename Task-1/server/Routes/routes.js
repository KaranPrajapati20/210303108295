const express = require('express');
const router = express.Router();
const controller = require('../Controllers/products');




router.get('/getproduct', controller.products);




module.exports = router;
