const Jobs = require('../../models/jobs')

const getJobsById = async (req,res) =>
{
    try{
        const jobs = await Jobs.findById(req.params.id).populate('postedBy')
        res.status(200).send(jobs);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = getJobsById;