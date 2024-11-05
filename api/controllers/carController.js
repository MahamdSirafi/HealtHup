const Car = require("../models/carModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getcar = handlerFactory.getOne(Car);
exports.createcar = handlerFactory.createOne(Car);
exports.updatecar = handlerFactory.updateOne(Car);
exports.deletecar = handlerFactory.deleteOne(Car);
exports.getAllcar = handlerFactory.getAll(Car);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = []
  if(!doc){
    return (new AppError("Message Error",400))
    }
  res.status(200).json({
    status: "success",
    doc,
  });
});
