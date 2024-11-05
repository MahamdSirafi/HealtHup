const mongoose = require('mongoose');
const carSchema = new mongoose.Schema(
  {
    name: {
      required: [true, 'must enter name'],
      type: String,
    },
    price: {
      required: [true, 'must enter price'],
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Car = mongoose.model('Car', carSchema);
module.exports = Car;
