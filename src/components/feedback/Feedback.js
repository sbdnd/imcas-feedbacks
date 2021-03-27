import React from "react";
import "./Feedback.css";

function Feedback({ user, feedback }) {
  return (
    <div>
      <div className="user-container">
        <img src={user.picture_url} alt="avatar" />

        <div className="user-profil">
          <div className="user-description">
            <p className="user-fullname">{user.fullname}</p>
            <p className="user-job">
              {" "}
              - {user.specialty.translations[0].name},&nbsp;
            </p>
            <p className="user-country">{user.country.translations[0].name}</p>
          </div>

          <div className="user-fb-content">
            <p className="user-fb">"{feedback[0].content}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
