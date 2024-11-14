const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  chat : {
      required : [true , 'must enter chat'],
type : mongoose.Schema.ObjectId,
ref : 'Chat'
    },
    isDoctor : {
      required : [true , 'must enter isDoctor'],
type : Boolean,
    },
    massege : {
      required : [true , 'must enter massege'],
type : String,
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    const Message = mongoose.model("Message", messageSchema);
    module.exports = Message;
    