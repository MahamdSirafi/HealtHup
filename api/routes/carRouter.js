const carController = require("../controllers/carController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(carController.getAllcar).post(authMiddlewers.restrictTo("admin"),carController.createcar);
  router
    .route("/:id")
    .get(carController.getcar)
    .patch(authMiddlewers.restrictTo("admin"),carController.updatecar)
    .delete(authMiddlewers.restrictTo("admin"),carController.deletecar);
  module.exports = router;
  