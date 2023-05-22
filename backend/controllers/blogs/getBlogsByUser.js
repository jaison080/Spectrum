const Blogs = require('../../models/blogs');
const getBlogsByUser = async (req, res) => {
    try{
        const blogs = await Blogs.find({author: req.user.user_id});
        res.status(200).send(blogs);
    }   
    catch(err){
        console.log(err); 
        res.status(500).send(err)
    }
}

module.exports = { getBlogsByUser }