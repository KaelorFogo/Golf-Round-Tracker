const express = require('express');
const router = express.Router();
const roundsCtrl = require('../../controllers/api/rounds');

// POST /api/rounds (create a user - sign up)
router.post('/', roundsCtrl.create);

router.get('/', roundsCtrl.getAllRoundsForuser);

router.get('/:id', roundsCtrl.show);

router.delete('/:id', roundsCtrl.deleteById);

module.exports = router;