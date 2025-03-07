import express from 'express';
import { getPaymentDetails, processPayment } from '../Controllers/PaymentController.js';

const router = express.Router();

// Endpoint for processing payments
router.post('/payment', processPayment);
router.get("/getPayment",getPaymentDetails)

export default router;
