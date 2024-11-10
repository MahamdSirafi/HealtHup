const testController = require("../controllers/testController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(testController.getAlltest)
  .post(authMiddlewers.restrictTo("doctor","admin")
  ,dynamicMiddleware.addVarBody("doctor","userId"),testController.createtest);
  router
    .route("/:id")
    .get(testController.gettest)
    .patch(authMiddlewers.restrictTo("doctor","admin")
    ,testController.updatetest)
    .delete(authMiddlewers.restrictTo("doctor","admin")
    ,testController.deletetest);
    
  module.exports = router;
  