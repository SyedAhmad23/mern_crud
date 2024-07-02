const Hotel = require("../models/hotelModel");

// Get all hotels
exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new hotel
exports.addHotel = async (req, res) => {
  const { name, description, address, rating } = req.body;

  try {
    const newHotel = new Hotel({
      name, description, address, rating
    });

    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a hotel by ID
exports.updateHotel = async (req, res) => {
  const { id } = req.params;
  const { name, description, address, rating } = req.body;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { name, description, address, rating },
      { new: true }
    );

    if (!updatedHotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a hotel by ID
exports.deleteHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);

    if (!deletedHotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.status(200).json({ message: 'Hotel deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
