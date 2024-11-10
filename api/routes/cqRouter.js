const cqController = require("../controllers/cqController");
const { checkOwner } = require("../middlewares/checkMiddleware");
const Cq = require("../models/cqModel");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
router.route("/").get(cqController.getAllcq)
.post(authMiddlewers.restrictTo("admin","doctor"),
  dynamicMiddleware.addVarBody("doctor","userId"),cqController.createcq); 
    router
    .route("/:id")
    .get(cqController.getcq)
     .patch(authMiddlewers.restrictTo("doctor","admin"),checkOwner(Cq,"doctor","id"),cqController.updatecq)
     .delete(authMiddlewers.restrictTo("doctor","admin"),checkOwner(Cq,"doctor","id"),cqController.deletecq)
     module.exports = router;
  