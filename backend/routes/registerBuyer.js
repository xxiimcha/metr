// backend/routes/registerBuyer.js
const express = require('express');
const router = express.Router();
const Buyer = require('../models/Buyer');
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { username, email, password, address, phone } = req.body;

  console.log('Received data:', req.body);

  try {
    const newBuyer = new Buyer({
      username,
      email,
      password,
      address,
      phone,
    });

    const newUser = new User({
      email,
      username,
      password,
      userType: 'buyer',
    });

    await newBuyer.save();
    await newUser.save();

    res.status(201).json({ message: 'Buyer registered successfully' });
  } catch (error) {
    console.error('Error registering buyer:', error);
    res.status(500).json({ message: 'Error registering buyer', error });
  }
});

module.exports = router;
