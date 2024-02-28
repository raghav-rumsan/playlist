require("dotenv").config();
const mongoose = require("mongoose");
const playlistController = require("../modules/playlists/playlist.controller");
const musicController = require("../modules/musics/music.controller");

mongoose.connect(process.env.DB);

const setup = {
  initialize: async () => {
    await mongoose.connection.dropDatabase();
    console.log("DB reset");
    const playlist1 = await playlistController.create({
      title: "80's rock",
      description: "80's rock music",
    });
    const playlist2 = await playlistController.create({
      title: "90s bollywood",
      description: "90s bollywood music",
    });
    console.log("-----playlists Setup Completed-----");

    const music1 = await musicController.create({
      title: "I want to break free",
      artist: "Queen",
      duration: "4:18",
      playlist: playlist1._id,
    });
    const music2 = await musicController.create({
      title: "Pehla Nasha",
      artist: "Udit Narayan",
      duration: "4:18",
      playlist: playlist2._id,
    });
    console.log({
      music1,
      music2,
      message: "-----Setup Completed-----",
    });
  },
};
setup.initialize();
