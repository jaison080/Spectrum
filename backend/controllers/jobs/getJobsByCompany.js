const Jobs = require('../../models/jobs');
const getJobsByCompany = async (req,res) =>{
    const company = req.user.user_id;
    console.log(company)
    try{
        const jobs = await Jobs.find({postedBy:company});
        res.status(200).send(jobs);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
}
module.exports = getJobsByCompany;