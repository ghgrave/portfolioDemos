const router = require("express").Router();

// import from controllers
const {getRandImage, loadDocs} = require('../controllers/apiControllers');

// create functions in controllers and then import


router.get("/", loadDocs);

router.get("/randomImage", getRandImage);

module.exports = router;