const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');

router.get('/:name', ensureLoggedIn, coursesCtrl.getCourse);

module.exports = router;