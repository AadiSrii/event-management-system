const eventService = require('../services/event.service');

class EventController {
  async createEvent(req, res) {
    try {
      const event = await eventService.createEvent(req.body);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEvents(req, res) {
    try {
      const events = await eventService.getEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Add more controller methods as needed...
}

module.exports = EventController; // Export the class directly
