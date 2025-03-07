import Order from '../models/orderModel.js'; // Update import path

const createOrder = async (req, res) => {
  try {
    const { user, designs, paymentStatus } = req.body;
    const order = await Order.create({ user, designs, paymentStatus });
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { createOrder, getOrderById };
