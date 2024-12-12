import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name required!"],
    minLength: [3, "Name at least contain 3 charecters!"],
  },
  email:{
    type: String,
    required: [true, "Email required!"],
    validate: [validator.isEmail, "please provide a valid email!"],
  },
  subject:{
    type: String,
    required: [true, "Subject required!"],
    minLength: [5, "Subject at least contain 5 charecters!"],
  },
  message:{
    type: String,
    required: [true, "Message required!"],
    minLength: [10, "Message at least contain 10 charecters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);