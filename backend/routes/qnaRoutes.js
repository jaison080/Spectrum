const express = require('express')
const router = express.Router()
const {verifyToken} = require('../middlewares/userAuth')
const {createQuestion} = require('../controllers/qna/postQuestion')
const { postAnswer } = require('../controllers/qna/postAnswer')
const {getAllQuestions} = require('../controllers/qna/getAllQuestions')
const {getAllAnsweredQuestions} = require('../controllers/qna/getAllAnsweredQuestions')
const {getQuestionById} = require('../controllers/qna/getQuestionById')
const {getAllUnansweredQuestions} = require('../controllers/qna/getAllUnansweredQuestions')
const {getAllQuestionsByUser} = require('../controllers/qna/getAllQuestionsByUser')
const {getAllAnswersByUser} = require('../controllers/qna/getAllAnswersByUser')
const {deleteQuestion} = require('../controllers/qna/deleteQuestion')
const {likeQuestion} = require('../controllers/qna/likeQuestion')
const {dislikeQuestion} = require('../controllers/qna/dislikeQuestion')
const { deleteAnswer } = require('../controllers/qna/deleteAnswer')
const { addComment } = require('../controllers/qna/addComment')
const { deleteComment } = require('../controllers/qna/deleteComment')

// Base URL: /api/qna
router.post('/postQuestion', verifyToken,  createQuestion);
router.post('/postAnswer/:question_id', verifyToken, postAnswer);
router.get('/getAllQuestions', verifyToken, getAllQuestions);
router.get('/getAllAnsweredQuestions', verifyToken, getAllAnsweredQuestions);
router.get('/getAllUnansweredQuestions', verifyToken, getAllUnansweredQuestions);
router.get('/getQuestionById/:id', verifyToken, getQuestionById);
router.get('/getAllQuestionsByUser', verifyToken, getAllQuestionsByUser);
router.get('/getAllAnswersByUser', verifyToken, getAllAnswersByUser);
router.delete('/deleteQuestion/:id', verifyToken, deleteQuestion);
router.delete('/deleteAnswer/:id', verifyToken, deleteAnswer);
router.post('/likeQuestion/:questionId', verifyToken, likeQuestion);
router.post('/dislikeQuestion/:questionId', verifyToken, dislikeQuestion);
router.post('/answer/:id/comment', verifyToken, addComment);
router.delete('/answer/:answerId/comment/:commentId', verifyToken, deleteComment)

module.exports = router;