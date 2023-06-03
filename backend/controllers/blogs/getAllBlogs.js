const Blogs = require('../../models/blogs');
const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blogs.find().populate('author').populate('comments.commenter');
        res.status(200).send(blogs);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = { getAllBlogs }