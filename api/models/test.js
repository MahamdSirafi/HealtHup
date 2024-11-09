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
      
  questions: [
        {
          type: {
            question: {
              required: [true, 'must enter question'],
              type: String,
            },
            answers: [
              {
              type:{
                answer:{
                required: [true, 'must enter answer'],
                type: String,
            },
            rate: {
                required: [true, 'must enter rate'],
                type: Number,
              },
          },
        },
      ],
    }
}],

rate: {
  required: [true, 'must enter rate'],
  type: Number,
},

    });
const Test = mongoose.model("Test", testSchema);
module.exports = Test;