const Disease = require('../models/diseaseModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getdisease = handlerFactory.getOne(Disease, {
  path: 'doctor',
  select: 'name specialization -_id',
});
exports.createdisease = handlerFactory.createOne(Disease);
exports.updatedisease = handlerFactory.updateOne(Disease);
exports.deletedisease = handlerFactory.deleteOne(Disease);
exports.getAlldisease = handlerFactory.getAllpop1(Disease, {
  path: 'doctor',
  select: 'name specialization -_id',
});
