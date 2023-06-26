const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {

    try {
      const { email, password } = req.body;
      console.log(email);
      console.log(password);
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email},
          process.env.JWT_SECRET,
          {
            expiresIn: "10h",
          }
        );
        user._doc.token = token;
        return res.status(200).json(user);
      }
      res.status(400).json({message: 'Invalid Credentials'});
    } catch (err) {
      console.log(err);
    }
  };


module.exports = { loginUser }