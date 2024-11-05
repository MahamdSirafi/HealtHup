const Cq = require("../models/cqModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getcq = handlerFactory.getOne(Cq,{path:"doctor",select:"name , specialization"});
exports.createcq = handlerFactory.createOne(Cq);
exports.updatecq = handlerFactory.updateOne(Cq);
exports.deletecq = handlerFactory.deleteOne(Cq);
exports.getAllcq = handlerFactory.getAllpop1(Cq,{path:"doctor",select:"name , specialization"});
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
