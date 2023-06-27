const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req,res) =>
{
    try{
        const username=req.body
        const password = req.body;
        if(!(username && password))
        {
            res.status(400).send("All input is required")
        }
        if(username===process.env.USERNAME && password===process.env.PASSWORD)
        {
            const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:"10h"})
            user._doc.token = token;
            return res.status(200).json(user)
        }
        res.status(400).json({message: "Invalid Credentials"})
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {login}