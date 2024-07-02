const mongoose = require("mongoose");
const Hotel = require("../models/hotelModel");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ahmadshah3236:iB6hfsnJdbWflFDP@tourease.qdjznkt.mongodb.net/tourease?retryWrites=true&w=majority&appName=tourease",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");

    // Call the seeding function after successful connection
    // await seedHotels();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

async function seedHotels() {
  try {
    await Hotel.deleteMany();
    const hotels = [
      {
        name: "Hotel A",
        description: "A cozy hotel in the heart of City A.",
        address: "123 Main St, City A",
        rating: 4.5
      },
      {
        name: "Hotel B",
        description: "A modern hotel with great amenities.",
        address: "456 Oak Ave, City B",
        rating: 3.8
      },
      {
        name: "Hotel C",
        description: "An elegant hotel offering luxury accommodations.",
        address: "789 Pine Blvd, City C",
        rating: 4.2
      }
    ];

    const insertedHotels = await Hotel.insertMany(hotels);
    console.log("Dummy hotels inserted:", insertedHotels);
  } catch (error) {
    console.error("Error seeding hotels:", error.message);
  } finally {
    mongoose.disconnect();
  }
}

module.exports = connectDB;
