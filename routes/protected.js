const express = require('express');
const router = express.Router();
const config = require("../config/config.js") 
const verifyToken = require("../auth/jwt.js")

router.get("/", verifyToken, (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
module.exports  = router;