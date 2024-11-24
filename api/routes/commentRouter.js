const commentController = require('../controllers/commentController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const { addQuery, addVarBody } = require('./../middlewares/dynamicMiddleware');
const { checkOwner } = require('../middlewares/checkMiddleware');
const express = require('express');
const Comment = require('../models/commentModel');
const router = express.Router({mergeParams:true});
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(addQuery('article', 'articleId'), commentController.getAllcomment)
  .post(
    addVarBody('user', 'userId'),
    addVarBody('article', 'articleId'),
    commentController.createcomment,
  );
router
  .route('/:id')
  .get(commentController.getcomment)
  .patch(checkOwner(Comment, 'user', 'id'), commentController.updatecomment)
  .delete(checkOwner(Comment, 'user', 'id'), commentController.deletecomment);
module.exports = router;
