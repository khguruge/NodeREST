const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Middleware

app.use('/posts', () => {
    console.log("this is middleware");
});

//Routes
app.get('/',(req,res) => {
    res.send('We are on home');
});

app.get('/posts',(req,res) => {
    res.send('We are on posts');
});

//DB Connect
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', () => {
    console.log("MongoDB Connected");
})

app.listen(3001);
