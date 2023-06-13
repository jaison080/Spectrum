const Blogs = require("../../models/blogs");
const cloudinary = require('cloudinary').v2;
const editBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    const { title, content, tags } = req.body;
    let image = null;
    if (req.file) {
      image = await cloudinary.uploader.upload(req.file.path);
    }
    if (blog.author.toString() === req.user.user_id) {
      blog.title = title || blog.title;
      blog.content = content || blog.content;
      blog.image = image?.secure_url || blog.image;
      blog.tags = tags || blog.tags;

      const updatedBlog = await blog.save();
      res.json(updatedBlog);
    } else {
      res.status(401).json({ msg: "You are not authorized to edit this blog" });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = { editBlog };
