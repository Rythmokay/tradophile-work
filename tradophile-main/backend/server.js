const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/Admin'); // Ensure the filename is correct (case-sensitive)
const blogRoutes = require('./routes/blogs'); // Make sure this matches your file name

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://rythmjagga:goosebumps@rythmapi.iyltz.mongodb.net/RythmApi?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes); // This should match the blogs.js file

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
