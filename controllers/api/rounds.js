const Rounds = require("../../models/round");

module.exports = {
  create,
  getAllRoundsForuser,
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