const chatController = require('../controllers/chatController');
const messageRouter = require('../routes/messageRouter');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { addVarBody, addQuery } = require('./../middlewares/dynamicMiddleware');
const { checkOwner } = require('./../middlewares/checkMiddleware');
const express = require('express');
const Chat = require('../models/chatModel');
const router = express.Router();
router.use('/:chatId/messages', messageRouter);
router.use(protect);
router
  .route('/minedoctor')
  .get(
    restrictTo('doctor'),
    addQuery('doctor', 'userId'),
    chatController.getAllchat,
  );
router
  .route('/mineuser')
  .get(
    restrictTo('user'),
    addQuery('user', 'userId'),
    chatController.getAllchat,
  );
router
  .route('/')
  .post(
    restrictTo('user'),
    addVarBody('user', 'userId'),
    chatController.createchat,
  );
router
  .route('/:id')
  .delete(
    restrictTo('user'),
    checkOwner(Chat, 'user', 'id'),
    chatController.deletechat,
  );
module.exports = router;
