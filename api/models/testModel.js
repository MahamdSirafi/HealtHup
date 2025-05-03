const mongoose = require('mongoose');
const Question = require('./questionModel');
const testSchema = new mongoose.Schema({
  doctor: {
    required: [true, 'must enter '],
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },

  name: {
    required: [true, 'must enter name'],
    type: String,
  },
  description: {
    required: [true, 'must enter description'],
    type: String,
  },
  photo: {
      type: String,
      default: 'default.jpg',
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
      advices: {
        required: [true, 'must enter advices'],
        type: Array,
      },
    },
  ],
});

testSchema.post('findOneAndDelete', async function (doc) {
  // console.log(doc);
  if (doc) {
    try {
      await Question.deleteMany({ test: doc._id });
    } catch (error) {
      return next(new AppError('error deleting questions', 500)); //ايجاد الخطأ نغير الرسالة والرمز         }
    }
  }
});
const Test = mongoose.model('Test', testSchema);
module.exports = Test;
