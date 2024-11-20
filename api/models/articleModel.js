const mongoose = require('mongoose');
const Comment = require('./commentModel');
const articlaSchema = new mongoose.Schema(
  {
    title: {
      required: [true, 'must enter title'],
      type: String,
    },
    content: {
      required: [true, 'must enter content'],
      type: String,
    },
    cat: {
      required: [true, 'must enter cat'],
      type: String,
    },
    vedio: {
      type: String,
    },
    photo: {
      required: [true, 'must enter cat'],

      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    likers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
    doctor: {
      required: [true, 'must enter '],
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
articlaSchema.post('findOneAndDelete', async function (doc) {
  // console.log(doc);
  if (doc) {
    try {
      await Comment.deleteMany({ article: doc._id });
    } catch (error) {
      return next(new AppError('error deleting comment', 500)); //ايجاد الخطأ نغير الرسالة والرمز         }
    }
  }
});
const Article = mongoose.model('Article', articlaSchema);
module.exports = Article;
