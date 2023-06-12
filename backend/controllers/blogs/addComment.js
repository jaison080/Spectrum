const Blogs = require('../../models/blogs');
const addComment = async (req,res) =>
{
    const newComment = {
        commenter: req.user.user_id,
        content:req.body.content,
        createdAt: new Date,
    }
    try{
        const comment = await Blogs.findByIdAndUpdate(
            {_id:req.params.id},
            {$push: {comments:newComment}},
            {new: true},
        );
        res.status(200).send(comment)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
};
module.exports = {addComment}
