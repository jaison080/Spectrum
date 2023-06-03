const {Question} = require("../../models/qna");
const getAllUnansweredQuestions = async (req, res) => {
    try {
        const questions = await Question.find({ answers: { $size: 0 } }).populate('answers').populate('author');
        res.status(200).send(questions);
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = { getAllUnansweredQuestions };