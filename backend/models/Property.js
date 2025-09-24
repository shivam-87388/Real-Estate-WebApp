const mongoose = require('../connection');


const propertySchema = new mongoose.Schema({
    title: { type: String, require: true },
    type: {type: String, require: true},
    price: { type: Number, require: true,  },
    location: { type: String, require: true },
    area: { type: Number, require: true },
    bedrooms: {type: Number, min: 0},
    bathrooms: {type: Number, min: 0},
    kitchen:{type: Number, min: 0},
    description: { type: String, require: true },
    images: [{ type: String, require: true }],
});

module.exports = mongoose.model('property', propertySchema);