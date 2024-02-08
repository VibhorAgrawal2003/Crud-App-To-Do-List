// Imports
const express = require("express");

// Router
const router = express.Router();
router.get("/tasks", (req, res) => {
  res.send("All tasks");
});

// Exports
module.exports = router;
