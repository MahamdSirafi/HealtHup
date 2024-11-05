const articlaController = require("../controllers/articlaController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(articlaController.getAllarticla).post(articlaController.createarticla);
  router
    .route("/:id")
    .get(articlaController.getarticla)
    .patch(articlaController.updatearticla)
    .delete(articlaController.deletearticla);
  module.exports = router;
  