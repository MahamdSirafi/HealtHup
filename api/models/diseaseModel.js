const mongoose = require('mongoose');
const diseaseSchema = new mongoose.Schema(
  {
    name: {
      required: [true, 'must enter name'],
      type: String,
    },
    symptoms: [
      {
        required: [true, 'must enter symptoms'],
        type: String,
      },
    ],
    description: {
      required: [true, 'must enter description'],
      type: String,
    },
    medicines: [
      {
        name: {
          required: [true, 'must enter name'],
          type: String,
        },
        photo: {
          required: [true, 'must enter photo'],
          type: String,
        },
        use: {
          required: [true, 'must enter use'],
          type: String,
        },
      },
    ],
    doctor: {
      required: [true, 'must enter doctor'],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Disease = mongoose.model('Disease', diseaseSchema);
module.exports = Disease;
