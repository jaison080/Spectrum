const QnA = require('../../models/qna');
const getQuestionById = async (req, res) => {
    try{
        const question = await QnA.findById(req.params.id);
        res.status(200).send(question);
    }
    catch(err){
         console.log(err); 
         res.status(500).send(err)
    }
}

module.exports = { getQuestionById }