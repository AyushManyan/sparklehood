const express = require('express'); 
const router = express.Router();
const AiSafetyController = require('../controller/aiSafetyController');

router.post('/incidents', AiSafetyController.createIncident);


module.exports = router;