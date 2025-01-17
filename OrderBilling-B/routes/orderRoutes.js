const express = require('express');
const { submitOrder } = require('../controllers/orderController');

const router = express.Router();

// Route for submitting orders
router.post('/submit', submitOrder);

module.exports = router;
