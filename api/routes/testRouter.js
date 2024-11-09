const testController = require("../controllers/testController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(testController.getAlltest).post(testController.createtest);
  router
    .route("/:id")
    .get(testController.gettest)
    .patch(testController.updatetest)
    .delete(testController.deletetest);
    
  module.exports = router;
  