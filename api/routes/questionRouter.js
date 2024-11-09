const questionController = require("../controllers/questionController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(questionController.getAllquestion).post(questionController.createquestion);
  router
    .route("/:id")
    .get(questionController.getquestion)
    .patch(questionController.updatequestion)
    .delete(questionController.deletequestion);
  module.exports = router;
  