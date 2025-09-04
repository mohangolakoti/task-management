const tasksController = require('../controllers/tasksController')
const express = require('express');
const router=express.Router();
const upload = require('../config/taskMulterConfig');

router.post('/add-task', upload.single('image'), tasksController.addTask);
router.get('/all-tasks', tasksController.getAllTask);

module.exports = router;