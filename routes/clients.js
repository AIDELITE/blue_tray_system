const express = require('express');
const router = express.Router();

//first route
router.get('/', (req, res)=>{
    res.send("This is the clients home page");
});

//second router
router.get('/103', (req, res) => {
    res.send('<h2>this is user 103 route</h2>');
});

module.exports = router;