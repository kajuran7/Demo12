import Payment from '../models/paymentModel.js';
import asynchandler from 'express-async-handler';
const processPayment = async (req, res) => {
  try {
    const { token, amount,user ,Designs} = req.body;
    // Perform any necessary validation on token and amount

  var price = amount /100
    // Save payment details to your database
    const payment = new Payment({
      paymentStatus:"paid",
      user:user._id,
      designs:Designs,
      amount:price,
      currency: 'LKR', 
      description: 'Payment for Designs',
      source: token.id, // Assuming you store the source ID as a string
    });

    const savedPayment = await payment.save();

    // If the payment is successful, send a success response
    res.json({ success: true, payment: savedPayment });
  } catch (error) {
    // If there's an error, send an error response
    res.status(500).json({ success: false, error: error.message });
  }
};


const getPaymentDetails = asynchandler(async (req, res) => {
  try {
    const data = await Payment.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});




export { processPayment ,getPaymentDetails};
