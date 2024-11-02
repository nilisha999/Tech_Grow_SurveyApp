import React from "react";
import { Link } from "react-router-dom";
import "./surveyapp.css";
import "./youtubebttn.css";

const SurveyApp: React.FC = () => {
  const handleClick = () => {
    console.log("Youtube button clicked");
  };

  return (
    <div className="appbg">
      <h1>Survey App Page</h1>

      <Link to="/get-started">
        <button className="youtube-button" onClick={handleClick}>
          <span className="button-text">Get Started</span>
        </button>
      </Link>
    </div>
  );
};

export default SurveyApp;
