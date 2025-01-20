const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now },
    location: { type: String, default: 'Unknown' },
    fuelLevel: { type: Number, min: 0, max: 100, required: true }, // Added validation
    batteryLevel: { type: Number, min: 0, max: 100, required: true }, 
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
