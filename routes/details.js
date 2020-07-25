const express = require('express');
const router=express.Router();
// getting user controller
const detailsController = require('../controllers/details_controller');
router.get('/',detailsController.details);
router.post('/update-habit/',detailsController.updateHabit);
module.exports=router;