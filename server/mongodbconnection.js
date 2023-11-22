const mongoose =require("mongoose");
const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://bharadwaj_mern:12345@cluster1.lcjvhav.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database Connected");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports= connectDB;