const jwt = require("jsonwebtoken");

const config = process.env;

const verifyCompany = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") &&
    req.body.role === "company"
  ) {
    token = req.headers.authorization.split("")[1];
  }
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    console.log("decoded :", req.user);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = { verifyCompany };
