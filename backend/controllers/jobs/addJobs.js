const Jobs = require('../../models/jobs');
const addJobs = async (req,res) => {
    try{
        const user = req.user.user_id;
        const {title,jobDesc,location,jobType,prerequisite,responsibility,misc,url} = req.body;
        const jobs = await Jobs.create({
            title,
            jobDesc,
            location,
            jobType,
            prerequisite,
            responsibility,
            misc,
            url,
            postedBy:user})
        res.status(200).send(jobs);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
}
module.exports = addJobs;
