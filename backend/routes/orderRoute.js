import express from 'express';
const router = express.Router();
import orderController from '../Controllers/orderController.js'; // Update import path

// Define routes
router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrderById);

// Add other routes as needed (update, delete, etc.)

export default router;
