import React, { useState } from "react";
import "./getstarted.css";

const GetStarted = () => {
  const [next, setNext] = useState<boolean>(false);
  const [profession, setProfession] = useState<string>("");
  const [interest, setInterest] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!next) {
      console.log("Clicked Next");
      setNext(true);
    } else {
      console.log("Form Submitted");
      setSubmitted(true);
    }
  };

  return (
    <div className="getstartedbg">
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleNext}>
          {!submitted ? (
            <>
              {!next ? (
                <>
                  <h1 className="signin-header">Basic Detail</h1>
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone Number" required />
                  <button type="submit" className="signin-button">
                    Next
                  </button>
                </>
              ) : (
                <>
                  <h1 className="signin-header">Additional Questions</h1>

                  <div className="radio-group">
                    <p>
                      <strong>1. What is your profession?</strong>
                    </p>
                    {["Student", "Software Engineer", "Teacher", "Others"].map(
                      (prof) => (
                        <label key={prof} className="radio-label">
                          <input
                            type="radio"
                            value={prof}
                            checked={profession === prof}
                            onChange={(e) => setProfession(e.target.value)}
                            required
                          />
                          {prof}
                        </label>
                      )
                    )}
                  </div>

                  <div className="radio-group">
                    <p>
                      <strong>2. What are your interests?</strong>
                    </p>
                    {[
                      "DSA",
                      "Full Stack Development",
                      "Data Science",
                      "Competitive Programming",
                      "Others"
                    ].map((int) => (
                      <label key={int} className="radio-label">
                        <input
                          type="radio"
                          value={int}
                          checked={interest === int}
                          onChange={(e) => setInterest(e.target.value)}
                          required
                        />
                        {int}
                      </label>
                    ))}
                  </div>

                  <button type="submit" className="signin-button">
                    Submit
                  </button>
                </>
              )}
            </>
          ) : (
            <h1 className="thank-you-message">
              Thank you for your submission!
            </h1>
          )}
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
