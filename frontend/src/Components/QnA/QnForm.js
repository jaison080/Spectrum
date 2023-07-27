import React, { useState } from "react";
import "./QnForm.css";
import Button from "../UI/Button";

const QnForm = (props) => {
  //const { title, content, isAnonymous, topics } = req.body;
  const [enteredQn, setEnteredQn] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTopics, setEnteredTopics] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const qnChangeHandler = (event) => {
    setEnteredQn(event.target.value);
  };

  const checkBoxChangeHandler = (event) => {
    setIsChecked(true);
    // setIsChecked(event.target.checked);
  };

  const topicsChangeHandler = (event) => {
    setEnteredTopics(event.target.value);
  };

  const qnSubmitHandler = async (event) => {
    event.preventDefault();

    const qnData = {
      title: enteredTitle,
      topics: enteredTopics,
      content: enteredQn,
      isAnonymous: isChecked,
    };

    props.onSaveQnData(qnData);
    setEnteredQn("");
    setEnteredTitle("");
    setEnteredTopics("");
    setIsChecked(false);
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/qna/postQuestion`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(qnData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const errorText = await response.text();
        console.error("Error:", errorText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isCancel, setIsCancel] = useState(false);

  const cancelChangeHandler = () => {
    setIsCancel(true);
    props.onCancel(isCancel);
  };

  return (
    <div className="new_qn_add_form">
      <form className="qn_form_control" onSubmit={qnSubmitHandler}>
        <div className="title_qn">
          <textarea
            required
            type="text"
            className="qn_titles"
            placeholder="Question_header"
            onChange={titleChangeHandler}
            style={{ textAlign: "center" }}
          ></textarea>
        </div>
        <div className="qn_details_input">
          <textarea
            required
            type="text"
            id="qn_input"
            onChange={qnChangeHandler}
            className="question_area"
            placeholder="Question in Detail"
            style={{ textAlign: "center" }} // Add inline style
          />
        </div>
        {/* <div className='b2'>
                        <label className='checkbox_description'>Ask Anonymously<input type='checkbox' className='qn_checkbox' checked={isChecked} onChange={checkBoxChangeHandler} /></label>
                        
                    </div> */}
        <div className="topics_qn">
          <input
            type="text"
            className="qn_topics"
            placeholder="topics"
            onChange={topicsChangeHandler}
            style={{ textAlign: "center" }}
          ></input>
        </div>
        <div className="b2">
          <button type="qn_submit" className="qn_button">
            Submit
          </button>
        </div>
        <div className="b2">
          <button
            type="qn_submit"
            className="qn_button"
            onClick={cancelChangeHandler}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default QnForm;
