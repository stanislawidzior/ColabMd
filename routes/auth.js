const express = require('express');
const router = express.Router();

const users = [
    {
        userName : "user",
        password : "password"
    },
    {
        userName : "user1",
        password :"password"
    },
]

router.post('/login', (req, res)=>{
    let print;
    try{
        print = req.body;
    }catch(e){
        print = e;
    }
    console.log(print);
    res.send("Hello")
})
module.exports = router