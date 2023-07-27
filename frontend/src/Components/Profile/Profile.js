import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserDetails from "./UserDetails";
import EditArticle from "./EditArticle";
import Qns from "../QnA/Qns";

const Profile = () => {
  const [userArticle, setUserArticle] = useState([]);
  const [isViewingArticle, setIsViewingArticle] = useState(false);
  const [currentArticleId, setCurrentArticleId] = useState(null);
  const [userQuestions, setUserQuestions] = useState([]);
  const [isViewingQuestion, setIsViewingQuestion] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isViewingAnswer, setIsViewingAnswer] = useState(false);
  const [currentAnswerId, setCurrentAnswerId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const editStartHandler = () => {
    setIsEditing(true);
  };

  const editStopHandler = () => {
    setIsEditing(false);
  };

  const setArticleViewHandler = (articleId) => {
    setCurrentArticleId(articleId);
    setIsViewingArticle(true);
  };

  const setArticleViewDisableHandler = () => {
    setCurrentArticleId(null);
  };

  const setQuestionViewHandler = (questionId) => {
    setCurrentQuestionId(questionId);
    setIsViewingQuestion(true);
  };

  const setQuestionViewDisableHandler = () => {
    setCurrentQuestionId(null);
  };

  const setAnswerViewHandler = (answerId) => {
    setCurrentAnswerId(answerId);
    setIsViewingAnswer(true);
  };

  const setAnswerViewDisableHandler = () => {
    setCurrentAnswerId(null);
  };

  const token = localStorage.getItem("token");
  const fetchUserArticle = async () => {
    try {
      const result = await fetch(`${process.env.REACT_APP_API}/blogs/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.ok) {
        const data = await result.json();
        setUserArticle(data);
        console.log(data);
      } else {
        console.error("Error:", result.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchUserQuestions = async () => {
    try {
      const result = await fetch(
        `${process.env.REACT_APP_API}/qna/getAllQuestionsByUser`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.ok) {
        const data = await result.json();
        setUserQuestions(data);
        console.log(data);
      } else {
        console.error("Error:", result.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchUserAnswers = async () => {
    try {
      const result = await fetch(
        `${process.env.REACT_APP_API}/qna/getAllAnswersByUser`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.ok) {
        const data = await result.json();
        setUserAnswers(data);
        console.log(data);
      } else {
        console.error("Error:", result.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteArticle = async (articleId) => {
    try {
      const result = await fetch(
        `${process.env.REACT_APP_API}/blogs/delete/${articleId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.ok) {
        const data = await result.json();
        console.log(data);
        fetchUserArticle();
      } else {
        console.error("Error:", result.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteQuestion = async (questionId) => {
    try {
      const result = await fetch(
        `${process.env.REACT_APP_API}/qna/deleteQuestion/${questionId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.ok) {
        const data = await result.json();
        console.log(data);
        fetchUserQuestions();
      } else {
        console.error("Error:", result.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteAnswer = async (answerId) => {
    try {
      const result = await fetch(
        `${process.env.REACT_APP_API}/qna/deleteAnswer/${answerId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.ok) {
        const data = await result.json();
        console.log(data);
        fetchUserAnswers();
      } else {
        console.error("Error:", result.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUserArticle();
    fetchUserQuestions();
    fetchUserAnswers();
  }, []);

  return (
    <div className="profile">
      <div className="profile__left">
        <UserDetails />
      </div>
      <div className="profile__right">
        <h3>ACTIVITIES</h3>
        <div className="user_articles">
          <h3>Articles</h3>
          <div className="user_articles_list">
            {userArticle.map((article) => (
              <div className="user_article" id={article._id}>
                <div
                  className="user_article_title"
                  onClick={() => setArticleViewHandler(article._id)}
                >
                  {article.title}
                </div>
                <div className="user_article_topic">{article.tags}</div>
                {/* <div className="user_article_content">{article.content}</div> */}
                <div className="user_article_date">
                  {new Date(article.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="user_article_edit">
                  {isViewingArticle && currentArticleId === article._id && (
                    <div className="blog_details">
                      <div className="blog_details_content">
                        <div>
                          <span
                            className="blog_detailsclose"
                            onClick={setArticleViewDisableHandler}
                          >
                            ×
                          </span>
                          <div className="blog_details_title">
                            {article.title}
                          </div>
                          <img
                            src={article.image}
                            alt="hi"
                            className="blog_details_img"
                          ></img>
                          <p className="blog_details_blog">{article.content}</p>
                          <div className="user_question_delete">
                              <button
                                className="user_question_delete_btn"
                                onClick={() => setDeleteConfirmationOpen(true)}
                              >
                                Delete
                              </button>
                              {isDeleteConfirmationOpen && (
                                <div className="delete-confirmation">
                                  <div className="delete-confirmation-content">
                                    <h3>Confirm Delete</h3>
                                    <p>
                                      Are you sure you want to delete this
                                      Article?
                                    </p>
                                    <div className="delete-confirmation-buttons">
                                      <button
                                        className="delete-confirmation-yes"
                                        onClick={() => {
                                          deleteArticle(article._id);
                                          setDeleteConfirmationOpen(false);
                                        }}
                                      >
                                        Yes
                                      </button>
                                      <button
                                        className="delete-confirmation-no"
                                        onClick={() =>
                                          setDeleteConfirmationOpen(false)
                                        }
                                      >
                                        No
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          {!isEditing && (
                            <button
                              onClick={editStartHandler}
                              className="user_article_edit_btn"
                            >
                              Edit
                            </button>
                          )}
                          {isEditing && (
                            <div className="edit_modal_contents">
                              <div className="edit_modal_content">
                                <div className="edit_form">
                                  <EditArticle
                                    key={article._id}
                                    id={article._id}
                                    title={article.title}
                                    image={article.image}
                                    article={article.content}
                                    tags={article.tags}
                                    onCancel={editStopHandler}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="user_questions">
          <h3>Questions</h3>
          <div className="user_questions_list">
            {userQuestions.map((question) => (
              <div className="user_question" id={question._id}>
                <div className="user_question_title">
                  <h4>{question.title}</h4>
                </div>
                <div className="user_question_topic">
                  Topics: <u>{question.topics}</u>
                </div>
                <div
                  className="user_question_content"
                  onClick={() => setQuestionViewHandler(question._id)}
                >
                  {question.content}
                </div>
                <div className="user_question_date">
                  {new Date(question.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                {isViewingQuestion && currentQuestionId === question._id && (
                  <div className="blog_details">
                    <div className="blog_details_content">
                      <div>
                        <span
                          className="blog_detailsclose"
                          onClick={setQuestionViewDisableHandler}
                        >
                          ×
                        </span>
                        <div className="qn_title">Question</div>
                        <div className="qn_answer">
                          <Qns
                            key={question._id}
                            id={question._id}
                            author={question.author.name}
                            auth_pic={question.author.profilePicture}
                            answer_id={question.answers.map(
                              (answer) => answer._id
                            )}
                            solver_name={question.answers.map(
                              (ans) => ans.answerer.name
                            )}
                            qn={question.content}
                            answer={question.answers.map((ans) => ans)}
                            topics={question.topics}
                            title={question.title}
                            likes={question.likes.length}
                          />
                        </div>

                        <div className="user_question_delete">
                          <button
                            className="user_question_delete_btn"
                            onClick={() => setDeleteConfirmationOpen(true)}
                          >
                            Delete
                          </button>
                          {isDeleteConfirmationOpen && (
                            <div className="delete-confirmation">
                              <div className="delete-confirmation-content">
                                <h3>Confirm Delete</h3>
                                <p>
                                  Are you sure you want to delete this question?
                                </p>
                                <div className="delete-confirmation-buttons">
                                  <button
                                    className="delete-confirmation-yes"
                                    onClick={() => {
                                      deleteQuestion(question._id);
                                      setDeleteConfirmationOpen(false);
                                    }}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    className="delete-confirmation-no"
                                    onClick={() =>
                                      setDeleteConfirmationOpen(false)
                                    }
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="user_answers">
          <h3>Answers</h3>
          <div className="user_answers_list">
            {userAnswers &&
              userAnswers.map((answer) => (
                <div className="user_answer" id={answer._id}>
                  <div className="user_answer_question">
                    <div className="user_answer_question_title">
                      {answer.question && answer.question.title
                        ? answer.question.title
                        : ""}
                    </div>
                    <div className="user_answer_question_topic">
                      Topics:
                      <u>
                        {answer.question && answer.question.topics
                          ? answer.question.topics
                          : ""}
                      </u>
                    </div>

                    <div
                      className="user_answer_question_content"
                      onClick={() => setAnswerViewHandler(answer._id)}
                    >
                      {answer.question && answer.question.content
                        ? answer.question.content
                        : ""}
                    </div>
                  </div>
                  {isViewingAnswer && currentAnswerId === answer._id && (
                    <div className="blog_details">
                      <div className="blog_details_content">
                        <div>
                          <span
                            className="blog_detailsclose"
                            onClick={setAnswerViewDisableHandler}
                          >
                            ×
                          </span>

                          <div className="user_answer_question_answer">
                            <div className="user_answer_question_answer_content">
                              <h4>Answer</h4>
                              {answer.content}
                            </div>
                            <div className="user_answer_question_answer_date">
                              {new Date(answer.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </div>
                            <div className="user_question_delete">
                              <button
                                className="user_question_delete_btn"
                                onClick={() => setDeleteConfirmationOpen(true)}
                              >
                                Delete
                              </button>
                              {isDeleteConfirmationOpen && (
                                <div className="delete-confirmation">
                                  <div className="delete-confirmation-content">
                                    <h3>Confirm Delete</h3>
                                    <p>
                                      Are you sure you want to delete this
                                      Answer?
                                    </p>
                                    <div className="delete-confirmation-buttons">
                                      <button
                                        className="delete-confirmation-yes"
                                        onClick={() => {
                                          deleteAnswer(answer._id);
                                          setDeleteConfirmationOpen(false);
                                        }}
                                      >
                                        Yes
                                      </button>
                                      <button
                                        className="delete-confirmation-no"
                                        onClick={() =>
                                          setDeleteConfirmationOpen(false)
                                        }
                                      >
                                        No
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
