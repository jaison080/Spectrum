const Houses = require('../../models/house')
const getAllHouses = async (req,res)=>
{
    try{
        const houses = await Houses.find().populate('owner');
        res.status(200).send(houses); 
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports = {getAllHouses}