import React from 'react'

const Mentorship = () => {
  return (
    <div className="relative w-full">
      {/* Full-width image */}
      <img
        src=".\images\mentorshipHome.png"
        alt="Full Width"
        className="w-full h-auto"
        style={{ maxHeight: "1046px" }}
      />

      {/* Button */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700">
          Find a Mentor
        </button>
      </div>
    </div>
  );
};


export default Mentorship;