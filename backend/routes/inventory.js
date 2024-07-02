const express = require('express');
const multer = require('multer');
const router = express.Router();
const Inventory = require('../models/Inventory');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
  }
});

const upload = multer({ storage });

// Endpoint to add a new inventory record with file uploads
router.post('/add', upload.array('pictures', 10), async (req, res) => {
  try {
    const { name, modelNumber, price, description } = req.body; // Added description
    const pictures = req.files.map(file => file.path); // Get the paths of uploaded files

    const newInventoryItem = new Inventory({
      name,
      modelNumber,
      price,
      description, // Save description
      pictures
    });

    await newInventoryItem.save();
    res.status(201).json(newInventoryItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get all inventory records
router.get('/', async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.status(200).json(inventoryItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get a single inventory record by ID
router.get('/:id', async (req, res) => {
  try {
    const inventoryItem = await Inventory.findById(req.params.id);
    if (!inventoryItem) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(inventoryItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
