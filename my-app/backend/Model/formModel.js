const mongoose = require("mongoose")

const formDetailsSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // profileImage: String,
})

const Form = mongoose.model('Form', formDetailsSchema);
module.exports = Form
