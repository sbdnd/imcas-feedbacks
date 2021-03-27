import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackDetail from "./components/FeedbackDetail";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  /**
   * Request to imcas api
   * datas are set into feedbacks variable
   */
  useEffect(() => {
    axios
      .get("https://api.imcas.com/v1/feedbacks")
      .then((res) => {
        setFeedbacks(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => <FeedbackList feedbacks={feedbacks} />}
        />
        <Route
          exact
          path="/feedbacks/:id"
          render={(props) => (
            <FeedbackDetail {...props} feedbacks={feedbacks} />
          )}
        />
      </Router>
    </>
  );
}

export default App;
