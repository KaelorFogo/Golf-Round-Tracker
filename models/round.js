const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roundSchema = new Schema({
  date: { type: Date, required: true },
  course: { type: String, required: true },
  score: { type: Number, required: true },
  notes: { type: String, required: false },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Round", roundSchema);
