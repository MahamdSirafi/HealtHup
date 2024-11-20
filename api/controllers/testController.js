const test = require('../models/testModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.gettest = handlerFactory.getOne(test, {
  path: 'doctor',
  select: 'name specialization',
});
exports.createtest = handlerFactory.createOne(test);
exports.updatetest = handlerFactory.updateOne(test);
exports.deletetest = handlerFactory.deleteOne(test);
exports.getAlltest = handlerFactory.getAllpop1(test, {
  path: 'doctor',
  select: 'name specialization',
});
