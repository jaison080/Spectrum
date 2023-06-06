const User = require("../../models/user");
const deleteUser = async (req, res) => {
    try{
        const id = req.user.user_id;
        const user = await User.findByIdAndRemove(id);
        res.json({ message: 'User profile deleted successfully' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the user' });
    }
}

module.exports = { deleteUser };