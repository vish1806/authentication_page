const mongoose = require("mongoose")

const GamerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const GamerModel= mongoose.model("gamers", GamerSchema)

module.exports= GamerModel