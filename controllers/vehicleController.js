const Vehicle = require('../models/vehicleModel');

// Add a new vehicle
const addVehicle = async (req, res) => {
    try {
        const { name,  location, fuelLevel, batteryLevel } = req.body;
        const newVehicle = new Vehicle({ name,location, fuelLevel, batteryLevel });
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error adding vehicle', error });
    }
};

// Update vehicle details
const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const { fuelLevel, batteryLevel } = req.body;

        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            id,
            { fuelLevel, batteryLevel, lastUpdated: Date.now() },
            { new: true, runValidators: true }
        );

        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error updating vehicle', error });
    }
};

// Fetch all vehicles (dashboard view)
const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vehicles', error });
    }
};

module.exports = { addVehicle, updateVehicle, getAllVehicles };
