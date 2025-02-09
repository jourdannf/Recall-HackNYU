// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const elderlyRoutes = require('./routes/elderly');
const cors = require('cors');

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
var whitelist = ['http://localhost:5173', 'http://127.0.0.1:5173']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);               // Auth Routes (Signup, Login)
app.use('/api/appointments', appointmentRoutes); // Appointment Routes
app.use('/api/elderly', elderlyRoutes); // Elderly Routes (Add Elderly)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch((error) => console.error('❌ MongoDB connection error:', error));