const User = require("../../models/user");
const bcrypt = require('bcrypt');
const editPassword = async (req, res) => {
    try{
        const id = req.user.user_id;
        const { oldPassword, newPassword } = req.body;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
        if(!isPasswordCorrect){
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        user.password = encryptedPassword;
        await user.save();
        res.json({ message: 'Password updated successfully' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'An error occurred while updating the password' });
    }
}
module.exports = { editPassword };