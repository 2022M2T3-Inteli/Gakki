const express = require('express');
const alocationController = require('../controllers/alocation');
const router = express.Router();

router.get('/', alocationController.getAllAlocations);

router.post('/', alocationController.createAlocation);


module.exports = router;