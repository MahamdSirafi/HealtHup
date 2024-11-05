const mongoose = require("mongoose");
const articlaSchema = new mongoose.Schema({
  title : {
      required : [true , 'must enter title'],
type : String,
    },
    content : {
      required : [true , 'must enter content'],
type : String,
    },
    cat : {
      required : [true , 'must enter cat'],
type : String,
    },
    vedio : {
      required : [true , 'must enter vedio'],
type : String,
    },
    likes : {

      type : Number,
      default:0,
    },
    doctor  : {
      required : [true , 'must enter '],
type : mongoose.Schema.ObjectId,
ref : 'User'
    },
    
},{
      timestamps: true,
      versionKey: false
    });
    const Articla = mongoose.model("Articla", articlaSchema);
    module.exports = Articla;
    