import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose
    .connect(
        process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGES" })
    .then(()=>{
    console.log("Conected to database!");
    })
    .catch(err=>{
        console.log("Some error detecting while conecting database", err);        
    });
};