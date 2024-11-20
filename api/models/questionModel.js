const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema(
  {
    test: {
      required: [true, 'must enter '],
      type: mongoose.Schema.ObjectId,
      ref: 'Test',
    },

    question: {
      required: [true, 'must enter question'],
      type: String,
    },

    answers: [
      {
        answer: {
          required: [true, 'must enter answer'],
          type: String,
        },
        rate: {
          required: [true, 'must enter rate'],
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
