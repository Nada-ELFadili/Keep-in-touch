const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prénom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    téléphone: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    } 
});


module.exports = mongoose.model('client',clientSchema);