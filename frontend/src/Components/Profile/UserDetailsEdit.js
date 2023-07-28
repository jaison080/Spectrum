import React, { useState } from "react";

const UserDetailsEdit = (props) => {
  {
    /* user.name = name || user.name;
    user.email = email || user.email;
    user.gender = gender || user.gender;
    user.sexualPreference = sexualPreference || user.sexualPreference;
    user.profilePicture = profilePicture?.secure_url || user.profilePicture;
    user.bio = bio || user.bio;
    user.dob = dob || user.dob; */
  }
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredSexualPreference, setEnteredSexualPreference] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [enteredBio, setEnteredBio] = useState("");
  const [enteredDob, setEnteredDob] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };

  const sexualPreferenceChangeHandler = (event) => {
    setEnteredSexualPreference(event.target.value);
  };

  const profilePictureChangeHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  const bioChangeHandler = (event) => {
    setEnteredBio(event.target.value);
  };

  const dobChangeHandler = (event) => {
    setEnteredDob(event.target.value);
  };

  const userDataSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", enteredName);
    formData.append("email", enteredEmail);
    formData.append("gender", enteredGender);
    formData.append("sexualPreference", enteredSexualPreference);
    formData.append("profilePicture", imageFile);
    formData.append("bio", enteredBio);
    formData.append("dob", enteredDob);

    props.onSaveUserData(formData);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredGender("");
    setEnteredSexualPreference("");
    setImageFile(null);
    setEnteredBio("");
    setEnteredDob("");

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/users/edit`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form className="form_control" onSubmit={userDataSubmitHandler}>
      <div className="newFormControls">
          <div>
            <input
              type="text"
              onChange={nameChangeHandler}
              value={enteredName}
              placeholder="Name"
              className="newFormControl"
              style={{ textAlign: "center" }}
            ></input>
          </div>
          <div>
            <input
              type="email"
              onChange={emailChangeHandler}
              value={enteredEmail}
              placeholder="Email"
              className="newFormControl"
              style={{ textAlign: "center" }}
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={genderChangeHandler}
              value={enteredGender}
              placeholder="gender"
              className="newFormControl"
              style={{ textAlign: "center" }}
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={sexualPreferenceChangeHandler}
              value={enteredSexualPreference}
              placeholder="sexualPreference"
              className="newFormControl"
              style={{ textAlign: "center" }}
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={bioChangeHandler}
              value={enteredBio}
              placeholder="bio"
              className="newFormControl"
              style={{ textAlign: "center" }}
            ></input>
          </div>
          <div className="fileInputContainer">
            <label htmlFor="fileInput" className="fileInputLabel">
              Choose File
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={profilePictureChangeHandler}
              accept="image/*"
              className="fileInput"
            />
          </div>

          <div className="user_edit_submit">
        <button type="button" className="edit__cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="user_submit">Submit</button>{" "}
      </div>
          </div>
      </form>
      
    </div>
  );
};

export default UserDetailsEdit;
