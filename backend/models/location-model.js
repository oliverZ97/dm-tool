const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Location = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        file_ID: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('location', Location)