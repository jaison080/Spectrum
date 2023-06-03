const User = require("../../models/user");
const userDetails = async (req, res) => {
    try{
        const userDetails = await User.findById(req.user.user_id);
        res.status(200).send(userDetails);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports = { userDetails };