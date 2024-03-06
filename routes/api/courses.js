const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:name', ensureLoggedIn, coursesCtrl.getCourse);

module.exports = router;