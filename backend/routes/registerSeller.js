// backend/routes/registerSeller.js
const express = require('express');
const router = express.Router();
const Seller = require('../models/Seller');
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { businessName, ownerName, email, phone, address, website, password, username } = req.body;

  try {
    const newSeller = new Seller({
      businessName,
      ownerName,
      email,
      phone,
      address,
      website,
    });

    const newUser = new User({
      email,
      username,
      password,
      userType: 'seller',
    });

    await newSeller.save();
    await newUser.save();

    res.status(201).json({ message: 'Seller registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering seller', error });
  }
});

module.exports = router;
