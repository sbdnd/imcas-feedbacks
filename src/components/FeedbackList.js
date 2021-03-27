import React from "react";
import Feedback from "./feedback/Feedback";
import { Link } from "react-router-dom";

function FeedbackList({ feedbacks }) {
  return (
    <>
      {feedbacks.map((fb, index) => (
        <Link
          to={{
            pathname: `/feedbacks/${fb.id}`,
          }}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <Feedback id={fb.id} user={fb.user} feedback={fb.translations} />
        </Link>
      ))}
    </>
  );
}

export default FeedbackList;
