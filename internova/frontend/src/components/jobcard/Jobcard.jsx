import React from "react";
import './Jobcard.css';

const Jobcard = () => {
  return (
    <div className="jobcard-container">
      <div className="jobcard">
        {/* Logo Section */}
        <div className="jobcard-logo">
          <div className="logo-initial">M</div>
          <div className="company-name">mcdonalds</div>
        </div>

        {/* Job Title */}
        <div className="jobcard-title">QA Analyst</div>

        {/* Stats Section */}
        <div className="jobcard-stats">
          <div className="stats-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="stats-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm2-6.5H6V5h4v2zm-4 1v2h4v-2H6z" />
            </svg>
            56 Applied
          </div>
          <div className="stats-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="stats-icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm2-6.5H6V5h4v2zm-4 1v2h4v-2H6z" />
            </svg>
            1 month left
          </div>
        </div>

        {/* Apply Button */}
        <div className="apply-button">Apply</div>
      </div>
    </div>
  );
};

export default Jobcard;
