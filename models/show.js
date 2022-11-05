const mongoose = require('mongoose')

// Make a Schema
const showSchema = new mongoose.Schema({
    name: { type: String, require: true },
    poster: { type: String, required: true},
    stars: { type: Number, required: true },
    review: { type: String, required: true},
    comments: [{
        commentName: { type: String, required: true},
        commentBody: { type: String, required: true}
    }],
    like: Boolean,
    username: String
})

// Make a Model From The Schema
const Show = mongoose.model('Show', showSchema)

// Export the Model
module.exports = Show
