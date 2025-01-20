const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now },
    location: { type: String, default: 'Unknown' },
    fuelLevel: { type: Number}, // Percentage
    batteryLevel: { type: Number }, // Percentage
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
