import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  designs: [
    {
      design: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Design',
        required: true,
      },
    },
  ],
  paymentStatus: {
    type: String,
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
