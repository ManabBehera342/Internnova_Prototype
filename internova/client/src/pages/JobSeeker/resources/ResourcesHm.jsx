import React, { useState,useEffect } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { IoMdRefreshCircle } from "react-icons/io";
import JobHeader from "@/components/JobHeader/JobHeader";
const ResourcesHm = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
  }, []);
  const [refreshKey, setRefreshKey] = useState(0); // Key for refreshing the Spline component
  const navigate = useNavigate();
  const refreshModel = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Increment the key to force re-render
  };
  const handleResumeClick = () => {
    navigate("/resume"); // Use navigate to redirect to login page
  };

  const handleroadmapsClick = () => {
    navigate("/roadmaps"); // Use navigate to redirect to login page
  };

  const handletestseriesClick = () => {
    navigate("/test-series"); // Use navigate to redirect to login page
  };

  handletestseriesClick;

  return (
    <>
      <JobHeader />
      {/* Main Container */}

      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
        {/* Left Section: Tagline */}
        <div className="flex-1 text-center md:text-left text-black font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-0">
          Fuel Your Journey, One{" "}
          <span className="text-violet-700 underline text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            Resource
          </span>{" "}
          at a Time.
          {/* Links Under the Tagline */}
          <div className="mt-8 space-y-4 text-sm md:text-base">
            <NavLink
              to="/resume"
              className="block text-violet-900 hover:text-violet-600 transition duration-300"
            >
              Resume Building Tool
            </NavLink>
            <NavLink
              to="/roadmaps"
              className="block text-violet-900 hover:text-violet-600 transition duration-300"
            >
              Book, Lectures, and Roadmap
            </NavLink>
            <NavLink
              to="/test-series"
              className="block text-violet-900 hover:text-violet-600 transition duration-300"
            >
              Test and PYQ
            </NavLink>
          </div>
        </div>

        {/* Right Section: Spline 3D */}
        <div className="relative flex-1 w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
          <Spline
            key={refreshKey} // Force re-render on key change
            scene="https://prod.spline.design/sFN7UoIeq-ps4bSx/scene.splinecode"
          />
          {/* Branding Overlay */}
          <div className="absolute bottom-4 right-4 bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 md:px-6 py-2 rounded-full">
            RESOURCES
          </div>
          {/* Refresh Button */}
          <button
            onClick={refreshModel}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-violet-700 text-white p-2 md:p-3 rounded-full hover:bg-violet-600 transition duration-300"
          >
            <IoMdRefreshCircle className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>

      {/* Simple Cards Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-xl w-full h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden">
          <img
            src="/images/resorceResume.png"
            alt="Card 1"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleResumeClick}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-violet-700 text-white px-4 py-2 hover:bg-violet-600 transition duration-300 text-sm sm:text-base md:text-lg"
          >
            CREATE RESUME
          </button>
        </div>

        {/* Card 2 */}
        <div
          onClick={handleroadmapsClick}
          className="bg-white rounded-lg shadow-xl w-full h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden"
        >
          <img
            src="../images/ResourceRoadmap.png"
            alt="Card 2"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-violet-700 text-white px-4 py-2 hover:bg-violet-600 transition duration-300 text-sm sm:text-base md:text-lg">
            Explore
          </button>
        </div>

        {/* Card 3 */}
        <div
          onClick={handletestseriesClick}
          className="bg-white rounded-lg shadow-xl w-full h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden"
        >
          <img
            src="../images/ResourceExam.png"
            alt="Card 3"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-violet-700 text-white px-4 py-2 hover:bg-violet-600 transition duration-300 text-sm sm:text-base md:text-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center text-gray-700 text-sm sm:text-base md:text-lg">
        INTERNOVA
      </div>
    </>
  );
};
export default ResourcesHm;
