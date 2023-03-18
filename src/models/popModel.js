const mongoose = require("mongoose")
const popupSchema = new mongoose.Schema({
   number: {
        type: String,
        require: true,
        trim: true
    },
    date:{
        type: String,
    },
    time :{
        type:String,
    },
    sno:{
        type:String
    }
}, { timestamps: true })
module.exports = mongoose.model('popupSchema', popupSchema)