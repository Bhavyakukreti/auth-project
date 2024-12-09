const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config(); // Load environment variables from .env file
const connectDB=require('./config/db')
const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(express.json());
connectDB()
// Routes
app.use("/api/user", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
