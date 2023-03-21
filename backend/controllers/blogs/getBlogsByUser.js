const Blogs = require('../../models/blogs');
const getBlogsByUser = async (req, res) => {
    try{
        const blogs = await Blogs.find({author: req.user.id});
        res.status(200).send(blogs);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports = { getBlogsByUser }