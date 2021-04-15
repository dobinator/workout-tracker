const router = require("express"). Router();
const path = require("path");
const viewDir = path.join(__dirname, "../views");


router.get("/", function (req, res) {
    res.sendFile(path.join(viewDir, "views/index.html"));
}); 

router.get ()

module.exports = router; 