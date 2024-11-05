const cqController = require("../controllers/cqController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(cqController.getAllcq).post(cqController.createcq);
  router
    .route("/:id")
    .get(cqController.getcq)
    .patch(cqController.updatecq)
    .delete(cqController.deletecq);
  module.exports = router;
  