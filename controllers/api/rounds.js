const Rounds = require("../../models/round");

module.exports = {
  create,
  getAllRoundsForuser,
  show,
  deleteById,
};

async function create(req, res) {
  try {
    const round = await Rounds.create({...req.body, user: req.user._id});
    res.json(round);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllRoundsForuser(req, res){
    const userRounds = await Rounds.find({ user: req.user._id });
    res.json(userRounds);
}

async function show(req, res) {
  const round = await Rounds.findById(req.params.id);
  res.json(round);
}

async function deleteById(req, res) {
  try {
    await Rounds.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.error('Error deleting round:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
