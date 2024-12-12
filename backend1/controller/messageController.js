import {Message} from "../models/messageSchema.js"

export const sendMessage = async (req, res)=>{


try {
    const { name, email, subject, message } = req.body;
    if( !name || !email || !subject || !message ){
        return res.status(400).json({
             success: false,
             message: "all fields are Required",
        });
    }
    await Message.create({ name, email, subject, message });
    res.status(200).json({
     success: true,
     message: "message sent sucessfully!",
    });  
} catch (error) {


  if(error.name === "ValidationError"){
        let errorMessage = "";
        if(error.errors.name){
            errorMessage += error.errors.name + " ";
        }
        if(error.errors.email){
            errorMessage += error.errors.email + " ";
        }
        if(error.errors.subject){
            errorMessage += error.errors.subject + " ";
        }
        if(error.errors.message){
            errorMessage += error.errors.message + " ";
        }
        return res.status(200).json({
             success: false,
             message: errorMessage,
        });
  }
   return res.status(500).json({
        success: false,
        message: "Unknown Error",
   });   
}  
};