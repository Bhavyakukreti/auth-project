const express = require("express");
const { register, login } = require("../controllers/userController");

const router = express.Router();

// POST route for registering a user
router.post("/register", register);

// POST route for logging in a user
router.post("/login", login);

module.exports = router;
