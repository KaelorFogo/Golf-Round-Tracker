const Rounds = require("../../models/round");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    const round = await Rounds.create({...req.body, user: req.user._id});
  } catch (err) {
    console.log(req.body);
    res.status(400).json(err);
  }
}
