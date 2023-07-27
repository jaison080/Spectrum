const Jobs = require('../../models/jobs');
const removeJobs = async (req,res) => {
    try{
        const jobs = await Jobs.findByIdAndDelete(req.params.id)
        res.status(200).send(jobs);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"Something went wrong"});
    }
}
module.exports = removeJobs;