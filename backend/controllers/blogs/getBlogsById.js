const Blogs = require('../../models/blogs');
const getBlogsById = async (req, res) => {
    try{
        const blog = await Blogs.findById(req.params.id);
        res.status(200).send(blog);
    }
    catch(err){
        console.log(err); 
        res.status(500).send(err)
    }
}
module.exports = { getBlogsById }