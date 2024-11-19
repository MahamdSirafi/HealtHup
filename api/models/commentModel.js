const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  type : {
      required : [true , 'must enter comment'],
type : String,
    },
     doctor : {
       required : [true , 'must enter doctor'],
      type : mongoose.Schema.ObjectId,
      ref : 'Doctor'
     },
    user : {
      required : [true , 'must enter user'],
type : mongoose.Schema.ObjectId,
ref : 'User'
    },
    articla : {
      required : [true , 'must enter user'],
type : mongoose.Schema.ObjectId,
ref : 'articla'
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    const Comment = mongoose.model("Comment", commentSchema);
    module.exports = Comment;
    