# Event Management System (Backend)

## Description

The Event Management System is a backend application built with Node.js and Express.js. It provides API endpoints to manage events, sessions, and participants. The application supports complex event structures and allows users to generate detailed reports for each event.

## Features

- Create, update, and delete events with nested sessions and speakers.
- Register participants with validation for participant limits.
- Retrieve detailed reports for events, including sessions and registered participants.
- Generate PDF reports for events with session and participant details.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **PDF Generation**: [PDFKit](https://pdfkit.org/)
- **Environment Variables**: dotenv

## Folder Structure


event-management-system/
├── src/
│ ├── config/
│ │ └── mongo.js
│ ├── controllers/
│ │ └── event.controller.js
│ ├── models/
│ │ └── Event.js
│ │ └── Participant.js
│ ├── routes/
│ │ └── event.routes.js
│ ├── services/
│ │ └── event.service.js
│ ├── app.js
│ └── index.js
├── .env
├── package.json
└── README.md

## Installation

1. **Clone the repository**:

   git clone https://github.com/AadiSrii/event-management-system.git
   cd event-management-system

   npm install

   Create a .env file in the root directory of the project with the following content:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/eventdb?retryWrites=true&w=majority
PORT=3000


Run the application:

node src/index.js


Access the API:
The API will be running on http://localhost:3000. You can use tools like Postman or cURL to test the endpoints.

**API Endpoints**
Create Event: POST /events
Get All Events: GET /events
Get Event by ID: GET /events/:id
Update Event: PUT /events/:id
Delete Event: DELETE /events/:id
Register Participant: POST /events/:id/participants
PDF Generation
PDF reports can be generated for each event, detailing sessions and registered participants. Ensure that the necessary packages are installed and configured for PDF generation.


**Acknowledgments**
Node.js
Express.js
MongoDB
Mongoose
PDFKit

**Happy Learning !**





