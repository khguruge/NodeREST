const express = require('express');

const router = express.Router();


router.get('/',(req,res) => {
    res.send('We are on user');
});

router.get('/spec',(req,res) => {
    res.send('We are on user spec');
});

module.exports = router;