const express = require('express');
const router = express.Router();
const { addHotel, deleteHotel, getHotels, updateHotel } = require('../controllers/hotelController');

// Define routes using imported controller functions
router.get('/', getHotels);        // GET /api/hotels
router.post('/', addHotel);
router.put('/:id', updateHotel);   // PUT /api/hotels/:id
router.delete('/:id', deleteHotel);// DELETE /api/hotels/:id

module.exports = router;
