const House = require('../../models/house');
const cloudinary = require('../../utils/cloudinary');
const createPost = async (req,res) =>
{
    
    try{
        const {rent,type,rooms,bathrooms,isTerrace,squareFeet,misc,contact,address} =req.body
        const user= req.user.user_id;
        let result = {
            secure_url: ''
        }
        if(req.file)
        {
            result=await cloudinary.uploder.upload(req.file.path);
        }
        const house = await House.create({
            rent:rent,
            type:type,
            rooms:rooms,
            bathrooms:bathrooms,
            isTerrace:isTerrace,
            squareFeet:squareFeet,
            misc:misc,
            contact:contact,
            owner:user,
            image:result.secure_url,
            address:address,
            lastModified: new Date(),
        })
        res.status(200).send(house);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {createPost}