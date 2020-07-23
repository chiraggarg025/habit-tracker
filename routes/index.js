const express = require('express');
const router = express.Router();
// getting homepage controller
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);


module.exports=router;