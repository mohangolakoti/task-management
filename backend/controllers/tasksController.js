const TaskProgress = require("../models/taskProgress");

const addTask = async (req, res) => {
  try {
    const {
      courseTitle,
      category,
      progress,
      duration,
      participants,
      backgroundImage,
    } = req.body;

    const newProgress = new TaskProgress({
      courseTitle,
      category,
      progress,
      duration,
      participants,
      updatedAt: Date.now(),
    });

    if (req.file) {
      newProgress.backgroundImage = `/uploads/tasks/${req.file.filename}`;
    } else {
      newProgress.backgroundImage = backgroundImage;
    }

    await newProgress.save();

    res
      .status(201)
      .json({ message: "task created successfully", post: newProgress });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllTask = async (req, res) => {
  try {
    const tasks = await TaskProgress.find().sort({ createdAt: -1 });

    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addTask,
  getAllTask,
};
