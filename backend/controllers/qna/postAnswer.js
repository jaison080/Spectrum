const {Question, Answer} = require('../../models/qna');
const postAnswer = async (req, res) => {
    try{
        const { content } = req.body;
        const user = req.user.user_id;
        const question_id = req.params.question_id;
        const question = await Question.findById(question_id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        const answer = await Answer.create({
            question: question_id,
            answerer: user,
            content: content, 
            createdAt: new Date() 
        });
        question.answers.push(answer);
        await question.save();
        res.status(200).send(answer);
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = { postAnswer }