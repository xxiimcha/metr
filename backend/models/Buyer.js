// backend/models/Buyer.js
const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model('Buyer', buyerSchema);
