const mongoose = require("mongoose")

const { Schema } = mongoose

const favoriteSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

export default Favorite;
