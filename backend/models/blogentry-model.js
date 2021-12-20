const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogEntry = new Schema(
    {
        title: { type: String, required: true },
        createdAt: { type: String, required: true },
        author: { type: String, required: true },
        text: { type: String, required: true},
        file_ID: {type: String, required: false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('blogentry', BlogEntry)