const express = require('express');
const connectDB = require('./config/db');
const hotelRoutes = require('./routes/hotelRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

// CORS
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/hotels', hotelRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
