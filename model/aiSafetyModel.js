const mongoose = require('mongoose');
const { Schema } = mongoose;

const aiSafetySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    severity: { type: String, enum: ['low', 'medium', 'high'], required: true },
    reported_at: { type: Date, default: Date.now },

});

const AiSafetyModel = mongoose.model('AiSafety', aiSafetySchema);

module.exports = AiSafetyModel;