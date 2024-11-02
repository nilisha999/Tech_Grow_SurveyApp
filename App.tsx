import React from "react";
import SurveyApp from "./componets/surveyapp";
import GetStarted from "./componets/getstarted";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SurveyApp />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
