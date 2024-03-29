import React, { useState } from "react";
import axios from "axios";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        setFeedbackStatus("Please fill in all the fields.");
      } else {
        await axios.post("/api/submit-feedback", { name, email, message });

        setName("");
        setEmail("");
        setMessage("");

        setFeedbackStatus("Feedback submitted successfully!");
      }
    } catch (error) {
      setFeedbackStatus("Error submitting feedback. Please try again.");
    }
  };

  return (
    <div className="fb-container">
      <h1>Please give your valuable feedback here</h1>
      <div className="fb-form-div">
        <form className="fb-form" onSubmit={handleSubmit}>
          <div className="fb-label">
            <label>Name:</label>
            <input
              className="fb-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="fb-label">
            <label>Email:</label>
            <input
              className="fb-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="fb-label">
            <label>Feedback:</label>
            <br />
            <br />
            <textarea
              className="fb-input fb-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="fb-label tU-btn fb-submit" type="submit">
            Submit Feedback
          </button>
        </form>
      </div>
      {feedbackStatus && (
        <div>
          <h2>
            <b>{feedbackStatus}</b>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Feedback;
