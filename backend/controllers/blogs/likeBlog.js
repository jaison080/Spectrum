const Blogs = require("../../models/blogs");
const likeBlog = async (req, res) => {
  try {
    const likeState = await Blogs.find({
      _id: req.params.id,
      likes: { $in: req.user.user_id },
    });
    console.log(likeState);
    if (likeState.length === 0) {
      const result = await Blogs.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { likes: req.user.user_id } },
        { new: true }
      );
      res.status(200).send(result);
    } else {
        const result = await Blogs.findByIdAndUpdate(
            { _id: req.params.id },
            { $pull: {likes:req.user.user_id} },
            { new: true}
          );
        res.status(200).send(result)
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
};
module.exports = { likeBlog };
