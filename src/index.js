const express = require("express")
const mongoose = require("mongoose")
const route = require("./router/route")

const app = express()
// const multer= require("multer");

// app.use( multer().any())
app.use(express.json());

mongoose.connect("mongodb+srv://miryala-veronica123:1Sz5U9LVS3afd1bB@cluster0.vfkx3.mongodb.net/Switch", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})