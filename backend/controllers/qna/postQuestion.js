const Question = require('../../models/questions');
const createQuestion = async (req, res) => {
    try{
        const { title, content, isAnonymous, topics } = req.body;
        const user = req.user.user_id;
        const question = await Question.create({
            title: title,
            content: content,
            author: user,
            isAnonymous: isAnonymous,
            topics: topics
        });
        res.status(200).send(question);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = { createQuestion }