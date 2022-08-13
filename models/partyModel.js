const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
    partyId: String,
    hostId: String,
    partyName: String,
    partyDesc: String,
    streetName: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    partyDate: Date,
    checkIn: Date,
    thingToKnow: Array,
    yes: Number,
    no: Number,
    maybe: Number,
    active: {
        type: Boolean,
        required: true
    }
})


const Party = mongoose.model('Party', partySchema);
module.exports = Party;

