const mongoose = require('../connection');


const propertySchema = new mongoose.Schema({
    tittle: { type: String, require: true },
    price: { type: Number, require: true, min: 0 },
    area: { type: Number, require: true },
    location: { type: String, require: true },
    description: { type: String, require: true },
    images: [{ type: String }],
});

module.exports = mongoose.model('property', propertySchema);