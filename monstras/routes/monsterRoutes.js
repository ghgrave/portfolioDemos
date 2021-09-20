const router = require("express").Router();

// import from controllers
const { loadHomePage } = require("../controllers/monsterControllers");

// create functions in controllers and then import
router.get("/", loadHomePage);

module.exports = router;
