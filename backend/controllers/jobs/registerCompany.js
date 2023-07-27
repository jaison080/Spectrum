    const Company = require('../../models/userCompany');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const registerCompany = async (req,res) =>{
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
            req.body.password = encryptedPassword;
            let comp = await Company.create(req.body);
            console.log(comp)
            const token = jwt.sign({id: comp._id}, process.env.JWT_SECRET,{expiresIn: "2h"})
            comp._doc.token=token+" "+"company";
            res.status(200).json(comp);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({message: "Something went wrong"});
        }
    }

    module.exports = registerCompany