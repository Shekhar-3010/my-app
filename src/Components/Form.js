import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        
        <label>Your name</label> <br />
        <input type="text"></input><br />

        <label>Email</label><br/>
        <input type="email"></input> <br />

        <label>Subject</label> <br />
        <input type="text"></input> <br />

        <label>Message</label> <br />
        <textarea
          rows={6}
          placeholder="Please entre your message here "
        ></textarea> <br />
        
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
