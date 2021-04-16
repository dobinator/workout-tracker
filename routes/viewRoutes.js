const router = require("express").Router();
const path = require("path");
const viewDir = path.join(__dirname, "../public");

router.get("/", function (req, res) {
  res.sendFile(path.join(viewDir, "index.html"));
});

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(viewDir, "exercise.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(viewDir, "stats.html"));
});

module.exports = router;
