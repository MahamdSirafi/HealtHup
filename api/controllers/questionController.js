const Question = require('../models/questionModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getquestion = handlerFactory.getOne(Question);
exports.createquestion = handlerFactory.createOne(Question);
exports.updatequestion = handlerFactory.updateOne(Question);
exports.deletequestion = handlerFactory.deleteOne(Question);
exports.getAllquestion = handlerFactory.getAll(Question);
exports.defult = catchAsync(async (req, res, next) => {
  //write your code here
  const doc = [];
  if (!doc) {
    return new AppError('Message Error', 400);
  }
  res.status(200).json({
    status: 'success',
    doc,
  });
});
