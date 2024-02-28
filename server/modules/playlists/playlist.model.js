const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Playlist", playlistSchema);
