const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req,res) =>
{
    try{
        const uname=req.body.email;
        const password = req.body.password;
        console.log(uname);
        console.log(password);
        console.log(process.env.UNAME);
        console.log(process.env.PASSWORD);
        if(!(uname && password))
        {
            res.status(400).send("All input is required")
        }
        if(uname===process.env.UNAME && password===process.env.PASSWORD)
        {
            const token = jwt.sign({uname},process.env.JWT_SECRET,{expiresIn:"10h"}) + " admin"
            const returnObject = {
                token: token
            }
            return res.status(200).json(returnObject)
        }
        res.status(400).json({message: "Invalid Credentials"})
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {login}