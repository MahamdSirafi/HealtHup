const questionController = require("../controllers/questionController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(questionController.getAllquestion)
  .post(authMiddlewers.restrictTo("doctor","admin"),
  questionController.createquestion);
  router
    .route("/:id")
    .get(questionController.getquestion)
    .patch(authMiddlewers.restrictTo("doctor","admin"),questionController.updatequestion)
    .delete(authMiddlewers.restrictTo("doctor","admin"),questionController.deletequestion);
  module.exports = router;
  