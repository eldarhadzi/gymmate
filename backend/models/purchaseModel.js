import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  appointmentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Appointment' },
  paymentIntentId: { type: String },
  amount: { type: Number },
  currency: { type: String },
  status: { type: String, enum: ['pending', 'succeeded'], default: 'pending' },
}, { timestamps: true });

const Purchase = mongoose.model('purchases', purchaseSchema);

export default Purchase;

