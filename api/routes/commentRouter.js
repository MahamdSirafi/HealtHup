const commentController = require("../controllers/commentController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(commentController.getAllcomment).post(commentController.createcomment);
  router
    .route("/:id")
    .get(commentController.getcomment)
    .patch(commentController.updatecomment)
    .delete(commentController.deletecomment);
  module.exports = router;
  