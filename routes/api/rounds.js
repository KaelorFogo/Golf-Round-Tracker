const express = require('express');
const router = express.Router();
const roundsCtrl = require('../../controllers/api/rounds');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST /api/rounds (create a user - sign up)
router.post('/', ensureLoggedIn, roundsCtrl.create);

router.get('/', ensureLoggedIn, roundsCtrl.getAllRoundsForuser);

router.get('/:id', ensureLoggedIn, roundsCtrl.show);

router.delete('/:id', ensureLoggedIn, roundsCtrl.deleteById);

module.exports = router;