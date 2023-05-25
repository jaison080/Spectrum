const House = require('../../models/house');
const deleteHouse = async (req,res) =>
{
    try{
        const postId=req.params.id;
        const userId= req.user.user_id;
        console.log(postId+"  "+ userId);
        const result = await House.deleteOne({_id:postId,owner:userId})
        res.status(200).send(result);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send(error);
    }
}
module.exports = {deleteHouse}