const Articla = require("../models/articlaModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getarticla = handlerFactory.getOne(Articla,{path:"doctor",select:"name , specialization"});
exports.createarticla = handlerFactory.createOne(Articla);
exports.updatearticla = handlerFactory.updateOne(Articla);
exports.deletearticla = handlerFactory.deleteOne(Articla);
exports.getAllarticla = handlerFactory.getAllpop1(Articla,{path:"doctor",select:"name , specialization"});
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
