const QnA = require('../../models/qna');
const postAnswer = async (req, res) => {
    try{
        const { content } = req.body;
        const user = req.user.user_id;
        const question_id = req.params.question_id;
        const answer = await QnA.findOneAndUpdate(
            { _id: question_id },
            { $push: { answers: { answerer: user, content: content, createdAt: new Date() } } },
            { new: true }
        );
        res.status(200).send(answer);
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = { postAnswer }