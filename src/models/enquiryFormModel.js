const mongoose = require("mongoose")
const enquiryFormSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true,
        trim: true,
    }, email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    message: {
        type: String,
        require: true,
        trim: true,
    }
}, { timestamps: true })
module.exports = mongoose.model('enquiryForm', enquiryFormSchema)