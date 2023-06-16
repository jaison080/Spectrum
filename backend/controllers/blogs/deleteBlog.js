const Blogs = require("../../models/blogs");
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.id);
        if (!blog) {
          return res.status(404).json({ error: 'Blog not found.' });
        }
    
        if (blog.author.toString() !== req.user.user_id.toString()) {
          return res.status(403).json({ error: 'You are not authorized to delete this blog.' });
        }
    
        await Blogs.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog deleted successfully.' });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while deleting the blog.' });
      }
}

module.exports = { deleteBlog };