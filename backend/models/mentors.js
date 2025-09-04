const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfileSchema = new Schema({
    name: { type: String, required: true },
    profession: { type: String, required: true },
    bio: { type: String },
    major: { type: String },
    taskCount: { type: Number, default: 0 },
    rating: { type: Number, min: 0, max: 5 },
    reviews: { type: Number, default: 0 },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
