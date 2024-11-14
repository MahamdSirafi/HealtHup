const mongoose = require("mongoose");
const Message = require("./messageModel");
const chatSchema = new mongoose.Schema({
  doctor : {
    required : [true , 'must enter doctor'],
type : mongoose.Schema.ObjectId,
ref : 'User'
  },
    user : {
      required : [true , 'must enter user'],
type : mongoose.Schema.ObjectId,
ref : 'User'
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    chatSchema.post("findOneAndDelete", async function (doc) {
        // console.log(doc);
        if (doc) {
          try {
            await Message.deleteMany({ chat: doc._id });
         } catch (error) {
            return next(new AppError("error deleting cars", 500));//ايجاد الخطأ نغير الرسالة والرمز         }
   }
   }});
    const Chat = mongoose.model("Chat", chatSchema);
    module.exports = Chat;
    