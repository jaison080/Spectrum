const QnA = require("../../models/qna");
const getAllAnsweredQuestions = async (req, res) => {
    try {
        const questions = await QnA.find({ answers: { $exists: true, $ne: [] } });
        res.status(200).send(questions);
    } catch (err) {
        console.log(err); 
        res.status(500).send(err)
    }
}

module.exports = { getAllAnsweredQuestions };