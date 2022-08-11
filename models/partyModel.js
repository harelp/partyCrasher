const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
    partyId: String,
    hostId: String,
    partyName: String,
    partyDesc: String,
    partyLoc: String,
    partyDate: Date,
    checkIn: Date,
    thingToKnow: Array,
    numOfPeople: Number
})


const Party = mongoose.model('Party', partySchema);
module.exports = Party;

