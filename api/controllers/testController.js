const test = require("../models/testModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.gettest = handlerFactory.getOne(test,{path:"doctor",select:"name , specialization"});
exports.createtest = handlerFactory.createOne(test);
exports.updatetest = handlerFactory.updateOne(test);
exports.deletetest = handlerFactory.deleteOne(test);
exports.getAlltest = handlerFactory.getAllpop1(test,{path:"doctor",select:"name , specialization"});
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