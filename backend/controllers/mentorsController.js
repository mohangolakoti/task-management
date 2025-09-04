const UserProfile = require("../models/mentors");

const addUserProfile = async (req, res) => {
  try {
    const { name, profession, bio, major, taskCount, rating, reviews, avatar } =
      req.body;

    const newProfile = new UserProfile({
      name,
      profession,
      bio,
      major,
      taskCount,
      rating,
      reviews,
      createdAt: Date.now(),
    });

    if (req.file) {
      newProfile.avatar = `/uploads/profiles/${req.file.filename}`;
    } else {
      newProfile.avatar = avatar;
    }

    await newProfile.save();

    res.status(201).json({
      message: "Profile card created successfully",
      post: newProfile,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await UserProfile.find().sort({ createdAt: -1 });
    res.status(200).json({ profiles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addUserProfile,
  getAllProfiles,
};
