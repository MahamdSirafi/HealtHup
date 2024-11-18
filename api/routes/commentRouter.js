const commentController = require("../controllers/commentController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const {checkOwner} = require("../middlewares/checkMiddleware");
  const express = require("express");
const Comment = require("../models/commentModel");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(commentController.getAllcomment).post(dynamicMiddleware.addVarBody("user","userId"),commentController.createcomment);
  router
    .route("/:id")
    .get(commentController.getcomment)
    .patch(checkOwner(Comment,"user","id"),commentController.updatecomment)
    .delete(checkOwner(Comment,"user","id"),commentController.deletecomment);
  module.exports = router;
  