const express = require('express');
const router = express.Router();

//first route
router.get('/', (req, res)=>{
    res.send("This is the users home page");
});

//second router
router.get('/102', (req, res) => {
    res.send('this is user 102 route');
});

module.exports = router;