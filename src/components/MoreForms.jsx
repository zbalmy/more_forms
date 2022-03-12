import React, { useState } from "react";

const MoreForms = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstname, lastname, email, password, confirmpassword };
    console.log(newUser);
    setHasBeenSubmitted(true);
  };

  return (
    <div>
      {hasBeenSubmitted === true ? (
        <h1>Thank you for submitting the form!</h1>
      ) : (
        <h1>Please fill in the form</h1>
      )}
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
          {firstname.length < 2 ? (
            <p>First name must be at least 2 charactrs</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
          {lastname.length < 2 ? (
            <p>Last name must be at least 2 charactrs</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {email.length < 5 ? <p>Email must be at least 5 charactrs</p> : ""}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {password.length < 8 ? (
            <p>Last name must be at least 8 charactrs</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmpassword"
            onChange={(e) => setConfirmpassword(e.target.value)}
            value={confirmpassword}
          />
          {password !== confirmpassword ? <p>Password must match</p> : ""}
        </div>
        <button>Submit</button>
      </form>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmpassword}</p>
    </div>
  );
};

export default MoreForms;
