const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const musicSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: {
      type: String,
      required: true,
    },
    duration: { type: String, required: true },
    playlist: { type: ObjectId, ref: "Playlist" }, // Reference to Playlist model
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Music", musicSchema);
