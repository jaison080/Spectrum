const User = require("../../models/user");
const cloudinary = require('cloudinary').v2;
const editUserDetails = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const {
      name,
      email,
      gender,
      sexualPreference,
      bio,
      dob,
    } = req.body;
    let profilePicture = null;
    if(req.file){
      profilePicture = await cloudinary.uploader.upload(req.file.path);
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.gender = gender || user.gender;
    user.sexualPreference = sexualPreference || user.sexualPreference;
    user.profilePicture = profilePicture?.secure_url || user.profilePicture;
    user.bio = bio || user.bio;
    user.dob = dob || user.dob;
    await user.save();

    res.json({ message: 'User profile updated successfully', user });
  } catch (err) {
      console.log(err);
      res.status(500).send(err);
  }
};

module.exports = { editUserDetails };
