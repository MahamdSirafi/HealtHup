const Articla = require("../models/articlaModel");
const AppError = require("../utils/appError");
const handlerFactory = require("../utils/handlerFactory");
const catchAsync = require("../utils/catchAsync");
exports.getarticla = handlerFactory.getOne(Articla,{path:"doctor",select:"name specialization"},{path:"likers",select:"name photo"});
exports.createarticla = handlerFactory.createOne(Articla);
exports.updatearticla = handlerFactory.updateOne(Articla);
exports.deletearticla = handlerFactory.deleteOne(Articla);
exports.getAllarticla = handlerFactory.getAllpop1(Articla,{path:"doctor",select:"name specialization"});
exports.addLike=catchAsync(
   async(req,res,next) =>{
    let doc =await Articla.findById(req.params.id)
    console.log(doc.likers.length!=0);
    if(doc.likers.length!=0){
        doc.likers.forEach(item=>{
            console.log(item,req.user._id);
if(item.toString()==req.user._id.toString())
      return next(  new AppError('رسالة الخطء التي سوف تعود للمستخدم',400 ))

        })
    }
        doc.likers.push(req.user._id)
doc.likes++
await doc.save()
res.status(200).json({
status:    "success",
doc
})
   }
)