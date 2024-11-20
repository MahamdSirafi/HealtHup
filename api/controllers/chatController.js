const Chat = require('../models/chatModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getchat = handlerFactory.getOne(
  Chat,
  { path: 'doctor', select: 'name photo' },
  { path: 'user', select: 'name photo' },
);
exports.createchat = handlerFactory.createOne(Chat);
exports.updatechat = handlerFactory.updateOne(Chat);
exports.deletechat = handlerFactory.deleteOne(Chat);
exports.getAllchat = handlerFactory.getAllpop1(
  Chat,
  { path: 'doctor', select: 'name photo' },
  { path: 'user', select: 'name photo' },
);
