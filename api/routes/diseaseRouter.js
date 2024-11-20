const diseaseController = require('../controllers/diseaseController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const { addVarBody } = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(diseaseController.getAlldisease)
  .post(
    authMiddlewers.restrictTo('doctor', 'admin'),
    addVarBody('doctor', 'userId'),
    diseaseController.createdisease,
  );
router
  .route('/:id')
  .get(diseaseController.getdisease)
  .patch(
    authMiddlewers.restrictTo('doctor', 'admin'),
    diseaseController.updatedisease,
  )
  .delete(
    authMiddlewers.restrictTo('doctor', 'admin'),
    diseaseController.deletedisease,
  );
module.exports = router;
