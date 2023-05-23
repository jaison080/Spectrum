const Blogs = require('../../models/blogs');
const cloudinary = require('cloudinary').v2;
const createBlog = async (req, res) => {
    try{
        const { title, content} = req.body;
        let result = {
            secure_url: ''
        };
        if(req.file){
             result = await cloudinary.uploader.upload(req.file.path);
        }
        const user = req.user.user_id;
        console.log(user);
        const blog = await Blogs.create({
            title: title,
            content: content,
            author: user,
            image: result.secure_url,
            });
        res.status(200).send(blog);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}
module.exports = { createBlog }
