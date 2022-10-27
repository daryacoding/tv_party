const mongoose = require('mongoose')

// Make a Schema
const showSchema = new mongoose.Schema({
    name: { type: String, require: true },
    stars: { type: Number, required: true },
    review: { type: String, required: true},
    like: Boolean
})

// Make a Model From The Schema
const Show = mongoose.model('Show', showSchema)

// Export the Model
module.exports = Show
