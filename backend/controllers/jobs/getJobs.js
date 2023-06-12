const Jobs = require('../../models/jobs');
const getJobs = async (req,res) =>
{
    try
    {
        const jobs = await Jobs.find().populate('postedBy');
        res.status(200).send(jobs);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = getJobs