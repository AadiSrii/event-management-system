const Event = require('../models/Event');

class EventService {
  async createEvent(eventData) {
    const event = new Event(eventData);
    return await event.save();
  }

  async getEvents() {
    return await Event.find();
  }

  // Add more methods as needed...
}

module.exports = new EventService();
