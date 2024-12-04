/* import React from "react";
import "./Job.css";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const jobId = "qwertyu";
  return (
    <div className="jobcard-container">
      <div className="jobcard" onClick={() => navigate(`/jobs/${jobId}`)}>
        
        <div className="jobcard-logo">
          <div className="logo-initial">
            <img src={job?.company?.logo} />
          </div>
          <div className="company-name">{job?.company?.name}</div>
        </div>

       
        <div className="jobcard-title">{job?.company?.title}</div>

        
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

       
        <div className="apply-button">Apply</div>
      </div>
    </div>
  );
};

export default Job;
 */
import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  // const jobId = "lsekdhjgdsnfvsdkjf";

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
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
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={() => navigate(`/jobs/${job?._id}`)} variant="outline">
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
