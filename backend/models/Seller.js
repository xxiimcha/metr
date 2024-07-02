// backend/models/Seller.js
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  ownerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String },
});

module.exports = mongoose.model('Seller', sellerSchema);
