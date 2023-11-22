const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const connectDB= require("../server/mongodbconnection")

const GamerModel = require('./models/Gamer')
const app= express()
app.use(express.json())
//app.use(cors())

app.use(cors({
    origin: 'http://localhost:5175', // Replace with your frontend URL
    credentials: true, // Indicates whether or not cross-site Access-Control requests should be made using credentials
  }));

connectDB();

app.post("/login",(req,res)=> {
    const {email,password} = req.body;
    GamerModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password)
            {
                res.json("Success")
            }

            else
            {
                res.json("incorrect password...")
            }
        }

        else{
            res.json("No records found..")
        }

    })
})

app.post('/register',(req,res)=>{

    GamerModel.create(req.body)
    .then(gamers=> res.json(gamers))
    .catch(err=> res.json(err))


})

app.listen(3001, ()=> {
    console.log("server running...")
})

