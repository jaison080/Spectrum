import React, { useState, useEffect } from "react";
import "./Qns.css";
import NewAnswer from "./NewAnswer";

const Qns = (props) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadComments, setLoadComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [newAnswer, setNewAnswer] = useState(false);

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  const handleShowComments = () => {
    setShowComments(true);
  };

  const handleHideComments = () => {
    setShowComments(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleHideAnswer = () => {
    setShowAnswer(false);
  };

  const newAnswerHandler = () => {
    setNewAnswer(true);
  };

  const saveSolvedQuestionDataHandler = (enteredSolutionData) => {
    const solutionData = {
      ...enteredSolutionData,
    };
    console.log(solutionData);
  };

  const token = localStorage.getItem("token");

  const handleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/qna/likeQuestion/${props.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            likes: liked ? likes - 1 : likes + 1,
            id: props.id,
          }),
        }
      );
      if (response.ok) {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
      } else {
        console.error("Error updating likes");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/qna/getAllAnsweredQuestions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setLoadComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const commentSubmitHandler = async (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const content = comment;
    try {
      const response = await fetch(
        `http://localhost:5000/api/qna/answer/${props.answer_id}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content, id: props.id }),
        }
      );

      if (response.ok) {
        // Comment added successfully
        setComments([...comments, comment]);
        console.log("Comment added successfully");
      } else {
        // Handle error case
        console.error("Error adding comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div>
      <div>
        <div className="qn_wrapper" id={props.id}>
          {/* <div><img src={props.image} alt='profile' className='answer_img' /></div> */}
          <div className="solver_identity">
            <div className="solver">{props.solver}</div>
            {/* <div className='solver_designation'>{props.designation}</div> */}
          </div>
          <div className="qn_title">{props.title} </div>
          <div className="qn_answering">{props.qn}? </div>
          <div className="topics">{props.topics} </div>
          <div className="answer_show">
            <button className="viewanswerbutton" onClick={handleShowAnswer}>
              View
            </button>
            {showAnswer && (
              <div className="ans_details">
                <div className="ans_details_content">
                  <div>
                    <span
                      className="ans_detailsclose"
                      onClick={handleHideAnswer}
                    >
                      ×
                    </span>
                  </div>
                  <div className="answer">{props.answer} </div>
                  <div className="qn_likes">Likes:{props.likes} 
                  
                  {/* <div className="likes"> */}
                    {/* Likes: {likes} */}
                    <button className="likebutton" onClick={handleLike}>
                      {liked ? (
                        <i className="fas fa-thumbs-down"></i>
                      ) : (
                        <i className="fas fa-thumbs-up"></i>
                      )}
                    </button>
                  </div>
                  <div className="comments">
                    <div className="addcomments">
                    <form className="addComment" onSubmit={commentSubmitHandler}>
                    <input
                      className="add_comment_input"
                      type="text"
                      name="comment"
                      placeholder="Add a comment"
                      style={{ textAlign: "center" }}
                    ></input>
                    <button type="submit">Comment</button>
                  </form>
                    </div>
                    {!showComments && (
                      <button
                        className="viewcommentsbutton"
                        onClick={handleShowComments}
                      >
                        View Comments
                      </button>
                    )}
                    {showComments && (
                      <>
                        <div className="comment_details">
                          <div className="comment_detail">
                            <button
                              className="viewcommentsbutton"
                              onClick={handleHideComments}
                            >
                              Hide Comments
                            </button>
                            {loadComments.map((question) => (
                              <div key={question._id}>
                                {question.answers.map((answer) => (
                                  <div key={answer._id}>
                                    {answer.comments.map((comment) => (
                                      <div
                                        key={comment._id}
                                        className="comment_wrapper"
                                      >
                                        <div className="commenter">
                                          {" "}
                                          {comment.commenter}
                                        </div>
                                        <div className="comment_time">
                                          {new Date(
                                            comment.createdAt
                                          ).toLocaleDateString(undefined, {
                                            month: "long",
                                            day: "numeric",
                                          })}
                                        </div>
                                        <div className="comment_content">
                                          Content: {comment.content}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {/* {comments.map((comment, index) => ( <div key={index}>{comment}</div> ))} */}
                  
                  <div className="new_Answer">
              {!newAnswer && ( <NewAnswer id={props.id} onSolveQuestion={saveSolvedQuestionDataHandler}/> )}
            </div>
                </div>
              </div>
            )}
                                            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qns;
