const Answer = require('../../models/answers');
const addComment = async (req, res) => {
    try {
        const answerId = req.params.id;
        const commenter = req.user.user_id;
        const { content } = req.body;
    
        const comment = {
          commenter,
          content,
          createdAt: Date.now(),
        };
    
        const answer = await Answer.findByIdAndUpdate(
          answerId,
          { $push: { comments: comment } },
          { new: true }
        );
    
        res.status(200).json(answer);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while adding the comment" });
      }
}
module.exports = { addComment }