/* import React from "react";
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
 */

import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  // Add console log to debug
  console.log("Job data received:", job);

  // Add null check
  if (!job) {
    return <div>No job data available</div>;
  }
  return (
    <div
      onClick={() => navigate(`/jobs/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
    >
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
