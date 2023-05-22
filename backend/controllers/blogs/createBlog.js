const Blogs = require('../../models/blogs');
const cloudinary = require('cloudinary').v2;
const createBlog = async (req, res) => {
    try{
        const { title, content} = req.body;
        //const result = await cloudinary.uploader.upload(req.file.path);
        const user = req.user.user_id;
        console.log(user);
        const blog = await Blogs.create({
            title: title,
            content: content,
            author: user,
            likes:[user],
            //image: result.secure_url,
            });
            blog.likes.pull(user);
        res.status(200).send(blog);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports = { createBlog }
