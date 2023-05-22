//return all the questions asked by a user
const QnA = require("../../models/qna");
const getAllQuestionsByUser = async (req, res) => {
    try {
        const questions = await QnA.find({ author: req.user.user_id });
        res.status(200).send(questions);
    } catch (err) {
        console.log(err); 
        res.status(500).send(err)
    }
}
module.exports = { getAllQuestionsByUser };