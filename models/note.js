const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagsSchema = new Schema({
    tag: String
}, {
    timestamps: true
})

const noteSchema = new Schema({
    title: String,
    tags: [tagsSchema],
    image: String,
    content: String,
    users: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)