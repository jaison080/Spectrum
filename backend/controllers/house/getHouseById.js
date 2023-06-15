const House = require('../../models/house')

const getHouseById = async (req,res) =>
{
    try
    {    const house = await House.findById(req.params.id).populate('owner')
        res.status(200).send(house)
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = getHouseById;