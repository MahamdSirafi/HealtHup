const cqController = require("../controllers/cqController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  //router.route("/").get(cqController.getAllcq).post(cqController.createcq);
router.route("/").get(cqController.getAllcq).post(authMiddlewers.restrictTo("admin","doctor"),
  dynamicMiddleware.addVarBody("doctor","userId"),cqController.createcq); 
    router
    .route("/:id")
    .get(cqController.getAllcq).post(authMiddlewers.restrictTo("admin","doctor"),
  dynamicMiddleware.addVarBody("doctor","userId"),cqController.createcq,cqController.getcq)
    .patch(cqController.getAllcq).post(authMiddlewers.restrictTo("admin","doctor"),
  dynamicMiddleware.addVarBody("doctor","userId"),cqController.createcq,cqController.updatecq)
    .delete(cqController.getAllcq).post(authMiddlewers.restrictTo("admin","doctor"),
  dynamicMiddleware.addVarBody("doctor","userId"),cqController.createcq,cqController.deletecq);
  module.exports = router;
  