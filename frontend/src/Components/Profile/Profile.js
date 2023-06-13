import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserDetails from "./UserDetails";
import EditArticle from "./EditArticle";

const Profile = () => {
  const [userArticle, setUserArticle] = useState([]);
  const [userQuestions, setUserQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const editStartHandler = () => {
    setIsEditing(true);
  };

  const editStopHandler = () => {
    setIsEditing(false);
  };

  const token = localStorage.getItem("token");
  const fetchUserArticle = async () => {
    try {
      const result = await fetch("http://localhost:5000/api/blogs/user", {
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
        "http://localhost:5000/api/qna/getAllQuestionsByUser",
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
        "http://localhost:5000/api/qna/getAllAnswersByUser",
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
          <h4>Articles</h4>
          <div className="user_articles_list">
            {userArticle.map((article) => (
              <div className="user_article" id={article._id}>
                <div className="user_article_title">{article.title}</div>
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
                  {!isEditing && (
                    <button onClick={editStartHandler} className="user_article_edit_btn">Edit</button>
                  )}
                  {isEditing && <EditArticle />}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="user_questions">
          <h4>Questions</h4>
          <div className="user_questions_list">
            {userQuestions.map((question) => (
              <div className="user_question" id={question._id}>
                <div className="user_question_title"><h6>{question.title}</h6></div>
                <div className="user_question_topic">Topics: <u>{question.topics}</u></div>
                <div className="user_question_content">{question.content}</div>
                <div className="user_question_date">
                  {new Date(question.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="user_answers">
          <h4>Answers</h4>
          <div className="user_answers_list">
            {userAnswers && userAnswers.map((answer) => (
              <div className="user_answer" id={answer._id}>
                <div className="user_answer_question">
                  <div className="user_answer_question_title">
                    {answer.question && answer.question.title ? answer.question.title : ''}
                  </div>
                  <div className="user_answer_question_topic">
                    Topics:<u>{answer.question && answer.question.topics ? answer.question.topics : ''}</u> 
                  </div>
                  <div className="user_answer_question_content">
                    {answer.question && answer.question.content ? answer.question.content : ''}
                  </div>
                </div>
                <div className="user_answer_question_answer">
                  <div className="user_answer_question_answer_content">
                    <h6>Answer</h6>{answer.content}
                  </div>
                  <div className="user_answer_question_answer_date">
                    {new Date(answer.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
