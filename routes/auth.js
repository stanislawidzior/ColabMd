const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");
const config = require("../config/config.js") 
const verifyToken = require("../auth/jwt.js")
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

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname ,'../public/login.html'));

});

router.post('/login', (req, res, next)=>{
    let userName;
    let password;
    try{
        userName = req.body.userName;
        password = req.body.password;
        if(userName  == undefined || password == undefined){
        
            next(new Error("incorrect request body"))
            return
        }
        
        if(users.find((arr) => (arr.userName === userName && arr.password === password))){
           let token;
        
            //Creating jwt token
            token = jwt.sign(
                {
                    userName: req.userName
                },
                config.secretKey,
                { expiresIn: "3h" }
            );

        return res
            .status(200)
            .json({
                success: true,
                data: {
                    userId: req.userName,
                    token: token,
                },
            })
        }else{
            return res.status(401).send("incorrect username or password")
        }
        
    }catch(e){
        return next(e)
    }
    
})

router.use((err,req,res,next) => {
    res.status(500).send("internal server error: " + err.message )
})
module.exports = router