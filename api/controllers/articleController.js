const Article = require('../models/articleModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getarticle = handlerFactory.getOne(
  Article,
  { path: 'doctor', select: 'name specialization' },
  { path: 'likers', select: 'name photo' },
);
exports.createarticle = handlerFactory.createOne(Article);
exports.updatearticle = handlerFactory.updateOne(Article);
exports.deletearticle = handlerFactory.deleteOne(Article);
exports.getAllarticle = handlerFactory.getAllpop1(Article, {
  path: 'doctor',
  select: 'name specialization',
});
exports.addLike = catchAsync(async (req, res, next) => {
  let doc = await Article.findById(req.params.id);
  console.log(doc.likers.length != 0);
  if (doc.likers.length != 0) {
    doc.likers.forEach((item) => {
      console.log(item, req.user._id);
      if (item.toString() == req.user._id.toString())
        return next(new AppError('رسالة الخطء التي سوف تعود للمستخدم', 400));
    });
  }
  doc.likers.push(req.user._id);
  doc.likes++;
  await doc.save();
  res.status(200).json({
    status: 'success',
    doc,
  });
});
