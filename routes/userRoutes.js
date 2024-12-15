const express = require("express");
const { register, login } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// POST route for registering a user
router.post("/register", register);

// POST route for logging in a user
router.post("/login", login);
router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your profile!", user: req.user });
  });
module.exports = router;
