const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');
require('dotenv').config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.set('strictQuery', false)
const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

// Routes
app.use('/api', vehicleRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
