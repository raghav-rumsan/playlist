const router = require("express").Router();
const musicController = require("./music.controller");

// Read
router.get("/", async (req, res) => {
  const results = await musicController.list();
  res.json({ data: results });
});

// Create
router.post("/", async (req, res) => {
  const music = await musicController.create(req.body);
  res.json({ data: music });
});

// read by id
router.get("/:id", async (req, res) => {
  const results = await musicController.getById(req.params.id);
  res.json({ data: results });
});

// update by id
router.put("/:id", async (req, res) => {
  const results = await musicController.updateById(req.params.id, req.body);
  res.json({ data: results });
});

// delete by id
router.delete("/:id", async (req, res) => {
  const results = await musicController.remove(req.params.id);
  res.json({ data: results });
});

module.exports = router;
