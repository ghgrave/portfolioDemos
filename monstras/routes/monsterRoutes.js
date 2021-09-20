const router = require("express").Router();

// import from controllers
const {loadHomePage, getMonsters, getRandImage} = require('../controllers/monsterControllers');

// create functions in controllers and then import
router.get("/", loadHomePage);

router.get("/randomImage", getRandImage);

module.exports = router;
