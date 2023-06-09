const Company = require('../../models/userComp');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerComp = async (req,res) =>{
    try{
        const email = req.body.email;
        if(!email)
        {
            return res.status(400).json({message:'Email is required'})
        }
        const oldUser = await Company.findOne({email})
        if(oldUser)
            return res.status(409).json({message:"user already exists"})
        const encryptedPassword = await bcrypt.hash(req.body.password,10);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = registerComp