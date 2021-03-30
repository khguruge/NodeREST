const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config');
 
app.use(bodyParser.json());
app.use(cors());
//Middleware

// app.use('/posts', () => {
//     console.log("this is middleware");
// });

const postRoute = require('./routes/posts');
const userRoute = require('./routes/user');
app.use('/posts', postRoute);
app.use('/user', userRoute);

app.get('/',(req,res) => {
    res.send('We are on home');
});

//DB Connect
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true}, () => {
    console.log("MongoDB Connected");
})

app.listen(3001);
