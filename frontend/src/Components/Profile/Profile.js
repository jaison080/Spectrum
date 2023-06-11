import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserDetails from "./UserDetails";

const Profile = () => {
  const [userArticle, setUserArticle] = useState([]);
  const [userQuestions, setUserQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

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

  useEffect(() => {
    fetchUserArticle();
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
              <div className="user_article">
                <div className="user_article_title">{article.title}</div>
                <div className="user_article_content">{article.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
