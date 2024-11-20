const messageController = require('../controllers/messageController');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { addVarBody, addQuery } = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router({ mergeParams: true });
router.use(protect);
router
  .route('/')
  .get(
    restrictTo('user', 'doctor'),
    addQuery('chat', 'chatId'),
    messageController.getAllmessage,
  )
  .post(
    restrictTo('user', 'doctor'),
    addVarBody('chat', 'chatId'),
    messageController.createmessage,
  );
router
  .route('/:id')
  .get(restrictTo('user', 'doctor'), messageController.getmessage)
  .patch(restrictTo('user', 'doctor'), messageController.updatemessage)
  .delete(restrictTo('user', 'doctor'), messageController.deletemessage);
module.exports = router;
