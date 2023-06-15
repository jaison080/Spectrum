const Blogs = require("../../models/blogs");
const viewComments = async (req,res) =>
{
    try{
        const result = await Blogs.find(
            {
                _id: req.params.id,
            },
            {
                comments:1
            }
        ).populate('comments.commenter');
        res.status(200).send(result);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = {viewComments}