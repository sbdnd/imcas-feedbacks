import React from "react";
import Feedback from "./feedback/Feedback";

function FeedbackDetail(props) {
  /**
   * return an array including one user where user's id match with param's id from url
   */
  const user = props.feedbacks.filter((user) => {
    return user.id === parseInt(props.match.params.id);
  });

  return (
    <>
      {user.map((usr) => (
        <Feedback key={usr.id} user={usr.user} feedback={usr.translations} />
      ))}
    </>
  );
}

export default FeedbackDetail;
