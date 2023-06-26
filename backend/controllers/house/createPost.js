const House = require('../../models/house');
const cloudinary = require('../../utils/cloudinary');
const createPost = async (req,res) =>
{
    
    try{
        const {rent,type,rooms,bathroom,terrace,squareFeet,misc,contactNumber,address,mapcoordinate} =req.body  
        const user= req.user.user_id;
        let result = {
            secure_url: ''
        }
        console.log(req.file);
        if(req.file)
        {
            console.log(req.file.path);
            result=await cloudinary.uploder.upload(req.file.path);
        }
        const house = await House.create({
            rent:rent,
            type:type,
            rooms:rooms, 
            bathrooms:bathroom,
            isTerrace:terrace,
            squareFeet:squareFeet,
            misc:misc,
            contact:contactNumber,
            owner:user,
            image:result.secure_url,
            address:address,
            lastModified: new Date(),
            coords: mapcoordinate
        })
        res.status(200).send(house);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send(error.message);
    }
}

module.exports = {createPost}