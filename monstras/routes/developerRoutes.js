const router = require("express").Router();

// import from controllers
const {loadDevelopersPage} = require('../controllers/developerControllers');

// create functions in controllers and then import


router.get("/", loadDevelopersPage);



module.exports = router;