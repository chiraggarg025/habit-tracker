const express = require('express');
const router = express.Router();
// getting homepage controller
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);
// use details routes
router.use('/details',require('./details'))


module.exports=router;