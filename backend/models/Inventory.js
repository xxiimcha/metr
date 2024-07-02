const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  modelNumber: { type: String, required: true },
  price: { type: Number, required: true },
  pictures: { type: [String], required: false }
});

module.exports = mongoose.model('Inventory', InventorySchema);
