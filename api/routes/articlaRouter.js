const articlaController = require("../controllers/articlaController");
const {checkOwner} = require("../middlewares/checkMiddleware");
const Articla = require("../models/articlaModel");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(articlaController.getAllarticla)
  .post( authMiddlewers.restrictTo("doctor","admin"),dynamicMiddleware.addVarBody("doctor","userId"),articlaController.createarticla);
  router
    .route("/:id")
    .get(articlaController.getarticla)
    .patch(authMiddlewers.restrictTo("doctor","admin"),checkOwner(Articla,"doctor","id"),articlaController.updatearticla)
    .delete(authMiddlewers.restrictTo("doctor","admin"),checkOwner(Articla,"doctor","id"),articlaController.deletearticla);
  module.exports = router;
  