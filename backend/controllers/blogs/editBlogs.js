const Blogs = require('../../models/blogs');
const editBlog = async (req, res) => {
    try{
        const blog = await Blogs.findById(req.params.id);
        if(blog.author.toString() === req.user.id){
            
            res.status(200).json({blog});
        }
        else{
            res.status(401).json({msg: 'You are not authorized to edit this blog'});
        }
    }
    catch(err){
        res.status(500).json({err});
    }
}

module.exports = { editBlog }