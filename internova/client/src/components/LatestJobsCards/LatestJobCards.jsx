import React from "react";
import { useNavigate } from "react-router-dom";
import "./LatestJobCards.css"; // Import the CSS file

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="latest-job-card"
    >
      <div>
        <h1 className="company-name">{job?.company?.name}</h1>
        <p className="location">India</p>
      </div>
      <div>
        <h1 className="job-title">{job?.title}</h1>
        <p className="job-description">{job?.description}</p>
      </div>
      <div className="info-container">
        <span className="info blue-info">{job?.position} Positions</span>
        <span className="info red-info">{job?.jobType}</span>
        <span className="info purple-info">{job?.salary} LPA</span>
      </div>
    </div>
  );
};

export default LatestJobCards;
