
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        require: true,
        trim: true,
    },
    jobTittle: {
        type: String,
        require: true,
        trim: true
    },
    company: {
        type: String,
        //  require: true,
        trim: true,
    },
    interest: {
        type: String,
        enum: ["AfterSales/Parts", "Customer-Private", "Customer-Public", "Enthusiast", "investor", "Local authority", "Media", "Policy maker", "Recruitment", "Supplier", "Other"],
        require: true,
        trim: true,
    },
    subscribeNews: {
        type: Boolean,
        require: true,
        trim: true
    }
}, { timestamps: true })
module.exports = mongoose.model('costumer', userSchema)