const express = require('express');
const router = express.Router();

const {testRoute} = require('../controllers/student');

router.route('/test').get(testRoute);

module.exports = router;