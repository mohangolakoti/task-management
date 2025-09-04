const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotEnv = require("dotenv");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const taskRoute = require('./routes/taskRoute');
const mentorRoute = require('./routes/mentorRoute');

dotEnv.config();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("MongoDB connection error:", error));

app.use('/task', taskRoute);
app.use('/mentor', mentorRoute);

app.use('/uploads', express.static('uploads'));

app.use('/', (req, res) => {
    res.send("<h1>Welcome to our Task Mangement Website</h1>");
});

app.listen(port, () => {
    console.log("Server started at port", port);
});
