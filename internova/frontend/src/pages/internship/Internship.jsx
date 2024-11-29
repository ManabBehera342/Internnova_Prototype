import React from "react";
import Jobcard from "../../../components/jobcard/Jobcard";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { MdVideoLibrary } from "react-icons/md";
import "./Job.css";

const Job = () => {
  return (
    <>
      <div className="jobs-container-jobs">
        <div className="full-width-image-jobs">
          <img
            src=".\images\jobpage.png"
            alt="Full Width Image"
            className="full-image-jobs"
          />
        </div>
        <div className="centered-image-jobs">
          <img
            src="./images/jobExplore.png"
            alt="Centered Image"
            className="explore-image-jobs"
          />
        </div>
        <div className="button-grid-contain-jobs">
          <div className="button-grid-jobs">
            <div className="job-button-jobs">
              <MdDraw className="icon-jobs" />
              <span>Graphic Designer</span>
            </div>
            <div className="job-button-jobs">
              <VscGraphLine className="icon-jobs" />
              <span>Data Analyst</span>
            </div>
            <div className="job-button-jobs">
              <MdVideoLibrary className="icon-jobs" />
              <span>Video Editor</span>
            </div>
            <div className="job-button-jobs col-span-2-jobs">
              <FaLaptopCode className="icon-jobs" />
              <span>Software Developer</span>
            </div>
            <div className="job-button-jobs">
              <FaArrowAltCircleRight className="icon-jobs" />
              <span>Explore</span>
            </div>
          </div>
        </div>
        <div className="featured-jobs-jobs">
          <h2 className="featured-title-jobs">Best Featured Jobs</h2>
          <div className="explore-featured-button-jobs">
            <FaArrowAltCircleRight className="Explore-icon-jobs" />
          </div>
        </div>
        <div className="jobcards-container-jobs">
          <div className="jobcard">
            <Jobcard />
          </div>
          <div className="jobcard">
            <Jobcard />
          </div>
          <div className="jobcard">
            <Jobcard />
          </div>
          <div className="jobcard">
            <Jobcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
