const { Schema, model } = require('mongoose')

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    }
})

const Favorite = model('Favorite', favoriteSchema)

module.exports = Favorite
