//@imports
const express = require('express');
const controller = require('./controller');

//@constants
const router = express.Router();

router.route('/').get(controller.exampleTest);

module.exports = router;
