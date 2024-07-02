const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve files from the uploads folder

// MongoDB connection
mongoose.connect('mongodb+srv://drkkuser:Tn6Sn12P2ByOo8Rl@drkk-erp.tpqeeml.mongodb.net/metr?retryWrites=true&w=majority&appName=drkk-erp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const registerSellerRoute = require('./routes/registerSeller');
const registerBuyerRoute = require('./routes/registerBuyer');
const loginRoute = require('./routes/login');
const inventoryRoute = require('./routes/inventory'); // Add inventory route
app.use('/register-seller', registerSellerRoute);
app.use('/register-buyer', registerBuyerRoute);
app.use('/login', loginRoute);
app.use('/inventory', inventoryRoute); // Use inventory route

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
