const express = require('express');
const router = express.Router();
const EventController = require('../controllers/event.controller'); // Import the class directly
const eventController = new EventController(); // Instantiate the controller

// Define your routes here
router.post('/', eventController.createEvent.bind(eventController)); // Bind the context
router.get('/', eventController.getEvents.bind(eventController)); // Bind the context

module.exports = router;
