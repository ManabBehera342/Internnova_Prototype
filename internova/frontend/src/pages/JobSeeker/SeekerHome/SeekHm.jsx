import React from "react";
import "./SeekHm.css";
import Footer from "../../../components/Footer/Footer";
import JobHeader from "../../../components/JobHeader/JobHeader";

const SeekHm = () => {
  return (
    <div>
      <JobHeader />
      <div className="outer-container">
        <div className="inner-conatiner">
          <div className="card card01">
            <img
              src="../images/internship image.png"
              alt="Card"
              className="card-image"
              style={{ height: "280px" }}
            />
            <p className="card-text">INTERNSHIP</p>
          </div>
          <div className="card card02">
            <img
              src="../images/jobs image.png"
              alt="Card"
              className="card-image"
              style={{ height: "284px" }}
            />
            <p
              className="card-text"
              style={{ backgroundColor: "rgba(98, 73, 142, 1)" }}
            >
              JOBS
            </p>
          </div>
          <div className="card card03">
            <img
              src="../images/mentorship image.png"
              alt="Card"
              className="card-image"
              style={{ height: "280px" }}
            />
            <p
              className="card-text"
              style={{ backgroundColor: "rgba(227, 173, 14, 1)" }}
            >
              MENTORSHIP
            </p>
          </div>
          <div className="card card04">
            <img
              src="../images/resources 1image.png"
              alt="Card"
              className="card-image"
              style={{ height: "280px" }}
            />
            <p
              className="card-text"
              style={{ backgroundColor: "rgba(238, 197, 63, 1)" }}
            >
              RESOURCES
            </p>
          </div>
        </div>
        <div className="image-potential">
          <img
            src="../images/Group 45.png"
            alt="Card"
            className="potentia-picture"
          />
        </div>
      </div>
      <div className="mentorship-container">
        <div className="mentorship-container-image">
          <button className="find-mentor">FIND MENTOR</button>
        </div>
      </div>
      <div className="resources-conatiner">
        <div className="resources-container-image">
          <div className="resources-content">
            <div className="resources-text">
              Includes resources for resume building and interview preparation
              to enhance job applications.
            </div>
            <button className="find-resources">FIND RESOURCES</button>
          </div>
        </div>
      </div>
      <div className="city-footer">
        <div className="city-footer-image-conainer">
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SeekHm;
