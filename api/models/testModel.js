const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({

doctor  : {
    required : [true , 'must enter '],
    type : mongoose.Schema.ObjectId,
    ref : 'User'
  },
  
  name: {
        required: [true, 'must enter name'],
        type: String,
      },
    
  rate: [
    {
        rate: {
          required: [true, 'must enter rate'],
          type: String,
      },
      
        minrate: {
          required: [true, 'must enter minrate'],
          type: Number,
        },
        maxrate: {
          required: [true, 'must enter maxrate'],
          type: Number,
        },
      }
    ],

    });
const Test = mongoose.model("Test", testSchema);
module.exports = Test;