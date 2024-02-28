const router = require("express").Router();

const musicRouter = require("../modules/musics/music.routes.api");
const playlistRouter = require("../modules/playlists/playlist.routes.api");

router.use("/playlists", playlistRouter);
router.use("/musics", musicRouter);

module.exports = router;
