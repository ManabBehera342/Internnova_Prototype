import { useEffect } from "react";
import React from "react";
import Navbar from "../Navbar/Navbar";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="mt-30 ml-20 mr-20 flex flex-col lg:flex-row items-start justify-between max-w-screen-xl mx-auto"
        id="about"
      >
        <div className="text-center lg:w-[50%]">
          <img
            src="./images/aboutimage24.png"
            alt="Responsive Image"
            className="w-[130%] sm:w-[120%] md:w-[110%] lg:w-[90%] h-auto mx-auto"
          />

          <div className="mt-8 ml-14 mr-14 max-w-xl text-center">
            <p className="text-lg text-gray-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Nulla vitae massa.
            </p>

            <button className="flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-blue-600 mx-auto">
              EXPLORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:w-[40%] w-full flex justify-start gap-6 mt-36">
          {/* Image 1 */}
          <div className="w-[calc(25%-0.5rem)]">
            <img
              src="./images/aboutRecomendation.png"
              alt="Card Image 1"
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="w-[calc(25%-0.5rem)]">
            <img
              src="./images/aboutPesonalization.png"
              alt="Card Image 2"
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="w-[calc(25%-0.5rem)]">
            <img
              src="./images/aboutOnestep.png"
              alt="Card Image 3"
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="w-[calc(25%-0.5rem)]">
            <img
              src="/images/aboutMentorship.png"
              alt="Card Image 4"
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

/* import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Navbar from './../../../../../x-backup/frontend/src/components/Navbar/Navbar';

const About = () => {
  return (
    <>
      <div className="container" id="about">
        
        <Navbar />
        <div className="about">
          <h1 className="about-head">ABOUT</h1>
          <p>
            Welcome to Internova, where we revolutionize the job-seeking
            experience through cutting-edge technology and a commitment to
            connecting talent with opportunity. Our platform harnesses advanced
            algorithms and AI-driven matchmaking to recommend candidates with
            relevant job opportunities tailored to their skills and aspirations.
            We believe in centralizing the job search process. Our portal
            aggregates listings from the private sector, government
            opportunities, and international employment avenues, ensuring that
            users have access to the latest openings all in one place. We
            continuously update job listings, providing our users with real-time
            access to fresh opportunities.
          </p>
          <p>
            Our platform is more than just a job board; we offer a comprehensive
            suite of tools designed to support job seekers at every stage of
            their journey. From resume building and interview preparation to
            career guidance, we equip candidates with the resources they need to
            succeed. Our dedicated sections for internships and industrial
            training opportunities ensure that students can gain valuable
            experience and kick-start their careers.
          </p>
          <p>
            Mentorship is a cornerstone of our mission. Internova connects
            students with industry professionals through mentorship programs,
            offering invaluable guidance and support. Our personalized
            one-on-one chat sessions with mentors enhance these opportunities,
            fostering growth and career development.
          </p>
          <p>
            To boost communication and conversion rates, we instantly notify
            users of new job postings through preference-based email and SMS
            alerts, keeping them informed and engaged. Our platform enhances
            connectivity, effectively linking job seekers with employers and
            improving interactions in the job market.
          </p>
          <p>
            Internova is your all-in-one solution for job searching and career
            advancement. We provide candidates with personalized job
            recommendations by analyzing their CVs and resumes, while our ATS
            (Applicant Tracking System) ecosystem scores resumes to help
            candidates enhance their interview prospects. Join us at Internova,
            where your career journey begins.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
 */
