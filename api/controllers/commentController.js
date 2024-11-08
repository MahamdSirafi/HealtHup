const Comment = require("../models/commentModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getcomment = handlerFactory.getOne(Comment);
exports.createcomment = handlerFactory.createOne(Comment);
exports.updatecomment = handlerFactory.updateOne(Comment);
exports.deletecomment = handlerFactory.deleteOne(Comment);
exports.getAllcomment = handlerFactory.getAll(Comment);
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
