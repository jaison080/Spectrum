const House = require('../../models/house')

const editHouse = async (req,res) =>
{
    try
    {
        const {rent,type,rooms,bathrooms,isTerrace,squareFeet,misc,contact,address} =req.body
        const user= req.user.user_id;
        const postId=req.params.id;
        let result = {
            secure_url: ''
        }
        if(req.file)
        {
            result=await cloudinary.uploder.upload(req.file.path);
        }
        const house = await House.updateMany({_id:postId},{$set:{
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
        }})
        res.status(200).send(house)
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send(error);
    }
}
module.exports = {editHouse}
