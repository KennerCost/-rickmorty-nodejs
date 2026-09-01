const router = require("express").Router();
const episodeController = require("../controllers/episode_controller");

router.get("/:id", episodeController.getById);

module.exports = router;