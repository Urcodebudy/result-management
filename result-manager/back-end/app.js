const express = require('express');
const app = express();

app.use(express.json());//To communicate with json data.

//Import all routes
const student = require('./routes/student');

app.use('/api/v1', student);//root url : localhost:4000/api/v1/... for al routes of student e.g. localhost:4000/api/v1/test

module.exports = app;