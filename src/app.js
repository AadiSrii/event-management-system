const express = require('express');
const connectDB = require('./config/mongo');
const eventRoutes = require('./routes/event.routes');
const { errorHandler } = require('./middlewares/error-handler.middleware');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Register routes
app.use('/api', eventRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = { app };
