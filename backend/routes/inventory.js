const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory'); // Ensure this model is correctly set up

// Endpoint to add a new inventory record
router.post('/add', async (req, res) => {
  try {
    const { name, modelNumber, price, pictures } = req.body;
    console.log('Received new inventory item:', { name, modelNumber, price, pictures });
    const newInventoryItem = new Inventory({
      name,
      modelNumber,
      price,
      pictures
    });
    await newInventoryItem.save();
    console.log('Saved new inventory item:', newInventoryItem);
    res.status(201).json(newInventoryItem);
  } catch (err) {
    console.error('Error saving inventory item:', err);
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get all inventory records
router.get('/', async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.status(200).json(inventoryItems);
  } catch (err) {
    console.error('Error fetching inventory items:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
