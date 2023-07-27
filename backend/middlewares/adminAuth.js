const jwt = require("jsonwebtoken")

const config = process.env

const verifyAdmin = (req,res,next) => {
    let token,role;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
        console.log(req.headers.authorization)
        token = req.headers.authorization.split(" ")[1];
        console.log(token);
        role=req.headers.authorization.split(" ")[2]
        console.log(role);
    }

    if(!token && role!=='admin')
        return res.status(403).send("A token is required for authentication")
    try
    {
        const decode = jwt.verify(token, config.JWT_SECRET);
        console.log(decode)
        req.user = decode
        console.log("decoded :",req.user);
    }
    catch(err){
        return res.status(401).send("Invalid Token");
    }
    return next();
    
}

module.exports = {verifyAdmin}