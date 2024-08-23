const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: String,
  speaker: String,
  participants: [
    {
      name: String,
      email: String,
    },
  ],
});

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  sessions: [sessionSchema],
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
