# Sparklehood AI Safety Incident Tracker

## Description
The Sparklehood AI Safety Incident Tracker is a Node.js-based application that allows users to log and manage AI safety incidents. It provides an API to create and track incidents with details such as name, description, severity, and the time of reporting.

## Features
- Create AI safety incidents with severity levels (`low`, `medium`, `high`).
- Automatically records the time of incident reporting.
- RESTful API design for easy integration.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/sparklehood.git
    cd sparklehood
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables: Create a `.env` file in the root directory and add the following:
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
    ```

4. Start the application:
    ```bash
    npm start
    ```

## API Endpoints

### POST /api/v1/incidents
**Description:** Create a new AI safety incident.  
**Request Body:**
```json
{
  "name": "Incident Name",
  "description": "Detailed description of the incident",
  "severity": "low | medium | high"
}
```

**Response:**
- `201 Created`: Returns the created incident.
- `400 Bad Request`: Returns an error message if validation fails.

### GET /api/v1/incidents
**Description:** Retrieve all AI safety incidents.  
**Response:**
- `200 OK`: Returns a list of all incidents.
- `500 Internal Server Error`: Returns an error message if something goes wrong.

### GET /api/v1/incidents/:id
**Description:** Retrieve a specific AI safety incident by its ID.  
**Path Parameter:**
- `id`: The unique identifier of the incident.

**Response:**
- `200 OK`: Returns the incident details.
- `404 Not Found`: Returns an error message if the incident is not found.
- `500 Internal Server Error`: Returns an error message if something goes wrong.

## Technologies Used
- Node.js
- Express.js
- MongoDB