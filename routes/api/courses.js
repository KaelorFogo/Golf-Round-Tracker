const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');

router.get('/:name', coursesCtrl.getCourse);

module.exports = router;