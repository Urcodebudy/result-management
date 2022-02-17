const express = require('express');
const app = express();

app.use(express.json());//To communicate with json data.

//Import all routes
const user = require('./routes/user');
const subject = require('./routes/subject');

app.use('/api/v1', user);//root url : localhost:4000/api/v1/... for al routes of student e.g. localhost:4000/api/v1/test
app.use('/api/v1', subject);

module.exports = app;