const mongoose = require("mongoose")

const { Schema } = mongoose

const favoriteSchema = new Schema( {
    href: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const FavoriteModel = mongoose.model('Favorite', favoriteSchema)

module.exports = FavoriteModel;
