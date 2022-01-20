const usersController = require("../controllers/users.controller");

var express = require("express");

var router = express.Router();

router.post("/register", usersController.register);
router.post("/login", usersController.login);

router.get("/get-user-data", usersController.getUserData); /*get user data */
// router.delete("/delete-user-data", usersController.deleteUserData);


module.exports = router;