const express = require('express'); 
const router = express.Router();
const AiSafetyController= require('../controller/aiSafetyController');

router.post('/incidents', AiSafetyController.createIncident);
router.get('/incidents', AiSafetyController.getIncidents);



module.exports = router;