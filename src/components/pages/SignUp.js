import React, { useState } from "react";
import '../../App.css';

function SignUp(props) {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log("First Name: " + fname);
      console.log("Last Name: " + lname);
      console.log("Email: " + email);
  }

  return (
    <div className='SignUp'>
      <form name="signup" onSubmit={handleSubmit}>
        <h1>Sign Up</h1><br/><br/>
        <label for="fname">First name:</label><br/>
        <input type="text" value={fname} onChange={e => setfName(e.target.value)}/><br/><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" value={lname} onChange={e => setlName(e.target.value)}/><br/><br/>
        <label for="email">Email:</label><br/>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/><br/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default SignUp;