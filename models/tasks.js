// Imports
const mongoose = require("mongoose");

// Schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

  tags: {
    type: Array,
    required: false,
  },

  priority: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: false,
  },

  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Exports
module.exports = umongoose.model("Task", taskSchema);
