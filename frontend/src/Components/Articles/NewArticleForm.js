import React, { useState, useEffect } from "react";
import "./NewArticleForm.css";

const NewArticleForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredArticle, setEnteredArticle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [enteredTopics, setEnteredTopics] = useState([]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const articleChangeHandler = (event) => {
    setEnteredArticle(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  const topicsChangeHandler = (event) => {
    const topics = event.target.value.split(",");
    setEnteredTopics(topics);
  };
  

  const articleSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", enteredTitle);
    formData.append("content", enteredArticle);
    formData.append("image", imageFile);
    formData.append("tags", JSON.stringify(enteredTopics));


    props.onSaveArticleData(formData);
    setEnteredTitle("");
    setEnteredArticle("");
    setImageFile(null);
    setEnteredTopics("");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/blogs/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          //   'Content-Type': `multipart/form-data`
        },
        body: formData,
      });

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

  return (
    <div className="article_form_modal">
      <form onSubmit={articleSubmitHandler} className="new_article_form">
        <div className="newFormControls">
          <div>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
              placeholder="Title"
              className="newFormControl"
              style={{ textAlign: "center" }}
            ></input>
          </div>
          <div className="">
            <textarea
              type="text"
              onChange={articleChangeHandler}
              value={enteredArticle}
              placeholder="Article"
              className="newFormArticle"
              style={{ textAlign: "center" }}
            ></textarea>
          </div>
          {/* <div>
            <input
              type="text"
              onChange={topicsChangeHandler}
              // value={enteredTopics}
              placeholder="Topics(seperate with commas)"
              className="newFormControl"
              style={{ textAlign: "center" }}
            ></input>
          </div> */}
          <div className="fileInputContainer">
            <label htmlFor="fileInput" className="fileInputLabel">
              Choose File
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={imageChangeHandler}
              accept="image/*"
              className="fileInput"
            />
          </div>

          <div className="article_submission">
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>{" "}
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewArticleForm;
