const Blogs = require('../../models/blogs');
const getBlogsById = async (req, res) => {
    try{
        const blog = await Blogs.findById(req.params.id);
        res.status(200).send(blog);
    }
    catch(err){
        res.status(500).send(blog);
    }
}
module.exports = { getBlogsById }