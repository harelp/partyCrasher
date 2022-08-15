const mongoose = require("mongoose");

const partySchema = new mongoose.Schema({
    hostId: {
        type: String,
        required: [true, 'A party must have a host Id']
    },
    partyName: {
        type: String,
        required: [true, 'A party must have a name'],
        trim: true
    },
    partyDesc: {
        type: String,
        required: [true, 'A party must have a description'],
        trim: true
    },
    streetName: {
        type: String,
        required: [true, 'A party must have a street name']
    },
    city: {
        type: String,
        required: [true, 'A party must have a city']
    },
    province: {
        type: String,
        required: [true, 'A party must have a province']
    },
    postalCode: {
        type: String,
        required: [true, 'A party must have a postal code'],
        uppercase: true
    },
    country: {
        type: String,
        required: [true, 'A party must have a country'],
        default: 'Canada'
    },
    partyDate: {
        type: String,
        required: [true, 'A party must have a date']
    },
    checkTime: {
        type: String,
        required: [true, 'A party must have a time']
    },
    thingToKnow: {
        type: Array,
    },
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    maybe: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        required: true
    }
})


const Party = mongoose.model('Party', partySchema);
module.exports = Party;

