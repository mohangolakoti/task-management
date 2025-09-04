const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskProgressSchema = new Schema({
  courseTitle: { type: String, required: true },
  category: { type: String, required: true },
  progress: { type: Number, required: true, min: 0, max: 100 },
  duration: { type: Number, required: true },
  participants: [
    {
      type: String,
      required: true,
    },
  ],
  backgroundImage: { type: String },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TaskProgress", taskProgressSchema);
