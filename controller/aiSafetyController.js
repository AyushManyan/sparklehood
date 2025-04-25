const AiSafetyModel = require('../model/aiSafetyModel');

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



module.exports = {
    createIncident,
};