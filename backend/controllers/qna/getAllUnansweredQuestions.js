const QnA = require("../../models/qna");
const getAllUnansweredQuestions = async (req, res) => {
    try {
        const questions = await QnA.find({ answers: { $size: 0 } });
        res.status(200).send(questions);
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = { getAllUnansweredQuestions };