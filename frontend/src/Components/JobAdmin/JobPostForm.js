import React, { useState } from "react";
import "./JobPostForm.css";

const JobPostForm = () => {
  const [item, setItem] = useState({
    title: "",
    jobDesc: "",
    location: "",
    jobType: "",
    prerequisite: "",
    responsibility: "",
    misc: "",
    url: "",
  });
  const titleChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const jobDescChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, jobDesc: event.target.value };
    });
  };
  const locationChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, location: event.target.value };
    });
  };
  const jobTypeChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, jobType: event.target.value };
    });
  };
  const prerequisiteChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, prerequisite: event.target.value };
    });
  };
  const responsibilityChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, responsibility: event.target.value };
    });
  };
  const miscChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, misc: event.target.value };
    });
  };
  const urlChangeHandler = (event) => {
    setItem((prevState) => {
      return { ...prevState, url: event.target.value };
    });
  };

  const addJobHandler = async (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    const jobData = {
        title: item.title,
        jobDesc: item.jobDesc,
        location: item.location,
        jobType: item.jobType,
        prerequisite: item.prerequisite,
        responsibility: item.responsibility,
        misc: item.misc,
        url: item.url,
    };
    try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/jobs/add`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jobData),
            }
        );
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
    };
  return (
    <div className="new_job">
      <form className="jobs_form" onSubmit={addJobHandler}>
        <div className="jobs_form_control">
          <div><input
            type="text"
            placeholder="Title"
            onChange={titleChangeHandler}
            className="job_input"
            value={item.title}
            required
            style={{ textAlign: "center" }}
          /></div>
          <div></div>
          <textarea
            placeholder="Job Description"
            onChange={jobDescChangeHandler}
            value={item.jobDesc}
            className="job_textarea"
            required
            style={{ textAlign: "center" }}
          /></div>
          <div>
          <input
            type="text"
            placeholder="Location"
            onChange={locationChangeHandler}
            value={item.location}
            className="job_input"
            required
            style={{ textAlign: "center" }}
          /></div>
          <div>
          <input
            type="text"
            placeholder="Job Type"
            onChange={jobTypeChangeHandler}
            value={item.jobType}
            className="job_input"
            // required
            style={{ textAlign: "center" }}
          /></div>
          <div>
          <textarea
            placeholder="Prerequisite"
            onChange={prerequisiteChangeHandler}
            value={item.prerequisite}
            className="job_textarea"
            // required
            style={{ textAlign: "center" }}
          /></div>
          <div>
          <textarea
            placeholder="Responsibility"
            onChange={responsibilityChangeHandler}
            value={item.responsibility}
            className="job_textarea"
            // required
            style={{ textAlign: "center" }}
          /></div>
          <div>
          <textarea
            placeholder="Misc"
            onChange={miscChangeHandler}
            value={item.misc}
            className="job_textarea"
            // required
            style={{ textAlign: "center" }}
          /></div>
          <div>
          <input
            type="text"
            placeholder="URL"
            onChange={urlChangeHandler}
            value={item.url}
            className="job_input"
            // required
            style={{ textAlign: "center" }}
          /></div>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobPostForm;
