const articleController = require('../controllers/articleController');
const commentRouter = require('../routes/commentRouter');
const { checkOwner } = require('../middlewares/checkMiddleware');
const Article = require('../models/articleModel');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use('/:articleId/comments', commentRouter);
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(articleController.getAllarticle)
  .post(
    authMiddlewers.restrictTo('doctor', 'admin'),
    dynamicMiddleware.addVarBody('doctor', 'userId'),
    articleController.createarticle,
  );
router.route('/:id/addlikes').patch(articleController.addLike);
router
  .route('/:id')
  .get(articleController.getarticle)
  .patch(
    authMiddlewers.restrictTo('doctor', 'admin'),
    checkOwner(Article, 'doctor', 'id'),
    articleController.updatearticle,
  )
  .delete(
    authMiddlewers.restrictTo('doctor', 'admin'),
    checkOwner(Article, 'doctor', 'id'),
    articleController.deletearticle,
  );
module.exports = router;
