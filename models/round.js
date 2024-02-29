const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roundSchema = new Schema({
  date: { type: Date, required: true },
  course: {
    type: "object",
    properties: {
      likes: {
        type: "array",
      },
      _id: {
        type: "string",
      },
      name: {
        type: "string",
      },
      phone: {
        type: "string",
      },
      website: {
        type: "string",
      },
      address: {
        type: "string",
      },
      city: {
        type: "string",
      },
      state: {
        type: "string",
      },
      zip: {
        type: "string",
      },
      country: {
        type: "string",
      },
      coordinates: {
        type: "string",
      },
      holes: {
        type: "string",
      },
      lengthFormat: {
        type: "string",
      },
      greenGrass: {
        type: "string",
      },
      fairwayGrass: {
        type: "string",
      },
      scorecard: {
        type: "array",
        items: {
          type: "object",
          properties: {
            Hole: {
              type: "integer",
            },
            Par: {
              type: "integer",
            },
            tees: {
              type: "object",
              properties: {
                teeBox1: {
                  type: "object",
                  properties: {
                    color: {
                      type: "string",
                    },
                    yards: {
                      type: "integer",
                    },
                  },
                },
              },
            },
            Handicap: {
              type: "integer",
            },
          },
        },
      },
      teeBoxes: {
        type: "array",
        items: {
          type: "object",
          properties: {
            tee: {
              type: "string",
            },
            slope: {
              type: "integer",
            },
            handicap: {
              type: "number",
            },
          },
        },
      },
      createdAt: {
        type: "string",
      },
      updatedAt: {
        type: "string",
      },
      __v: {
        type: "integer",
      },
    },
  },
  teeBox: { type: String, required: true },
  score: { type: Number, required: true },
  notes: { type: String, required: false },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Round", roundSchema);
