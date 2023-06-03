const Blogs = require('../../models/blogs');
const getBlogById = async (req, res) => {
    try{
        const blog = await Blogs.findById(req.params.id).populate('author').populate('comments.commenter');
        res.status(200).send(blog);
    }
    catch(err){
        console.log(err); 
        res.status(500).send(err)
    }
}
module.exports = { getBlogById }