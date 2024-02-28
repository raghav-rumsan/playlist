const router = require("express").Router();
const { middleware1 } = require("../../middlewares/middleware-one");
const playlistController = require("./playlist.controller");

// Read
router.get("/", middleware1, async (req, res) => {
  const results = await playlistController.list();
  res.json({ data: results });
});

// Create
router.post("/", async (req, res) => {
  const playlistResult = await playlistController.create(req.body);
  res.json({ data: playlistResult });
});

// read by id
router.get("/:id", async (req, res) => {
  const results = await playlistController.getById(req.params.id);
  res.json({ data: results });
});

// update by id
router.put("/:id", middleware1, async (req, res) => {
  const results = await playlistController.updateById(req.params.id, req.body);
  res.json({ data: results });
});

// delete by id
router.delete("/:id", async (req, res) => {
  const results = await playlistController.remove(req.params.id);
  res.json({ data: results });
});

module.exports = router;
