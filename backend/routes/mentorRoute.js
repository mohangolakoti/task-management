const userProfileController = require('../controllers/mentorsController');
const express = require('express');
const router = express.Router();
const upload = require('../config/mentorMulterConfig');

router.post('/add-mentor', upload.single('avatar'), userProfileController.addUserProfile);
router.get('/all-mentors', userProfileController.getAllProfiles);

module.exports = router;
