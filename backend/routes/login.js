const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login request received:', email, password); // Debugging log

    const user = await User.findOne({ email, password });
    if (!user) {
      console.log('Invalid credentials'); // Debugging log
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ id: user._id, email: user.email, userType: user.userType }); // Return user ID, email, and type
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
