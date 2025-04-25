const AiSafetyModel = require('../model/aiSafetyModel');

// Function to create a new incident
const createIncident = async (req, res) => {
    try {
        const { name, description, severity } = req.body;
        if(!name || !description || !severity) {
            return res.status(400).json({ message: 'Name, description, and severity are required' });
        }
        if (!['low', 'medium', 'high'].includes(severity)) {
            return res.status(400).json({ message: 'Severity must be one of low, medium, or high' });
        }
        const newIncident = new AiSafetyModel({ name, description, severity });
        await newIncident.save();
        res.status(201).json(newIncident);
    } catch (error) {
        res.status(400).json({ message: 'Baad request', error });
    }
}


// Function to get all incidents
const getIncidents = async (req, res) => {
    try {
        const incidents = await AiSafetyModel.find();
        if (incidents.length === 0) {
            return res.status(404).json({ message: 'No incidents found' });
        }
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}

// function to get a single incident by ID
const getIncidentById = async (req, res) => {
    try {
        const { id } = req.params;
        const incident = await AiSafetyModel.findById(id);
        if (!incident) {
            return res.status(404).json({ message: 'Incident not found' });
        }
        res.status(200).json(incident);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
}


module.exports = {
    createIncident,
    getIncidents,
    getIncidentById,
};