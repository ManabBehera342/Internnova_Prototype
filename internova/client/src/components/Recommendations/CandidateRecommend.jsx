import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CandidateRecommend = ({ jobId }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    country: "Sweden",
    location: "Stockholm",
    education: "Master",
    gender: "Male",
    age: 35,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);

        const requestData = {
          job_id: jobId,
          Country: filters.country,
          location: filters.location,
          Education: filters.education,
          Gender: filters.gender,
          age: parseInt(filters.age),
        };

        const response = await axios.post(
          "https://internova-api.onrender.com/candidate-recommendations",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setCandidates(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching candidate recommendations:", err);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchCandidates();
    }
  }, [jobId, filters]);

  const educationOptions = ["Bachelor", "Master", "PhD"];
  const genderOptions = ["Male", "Female", "Other"];
  const locationOptions = ["Stockholm", "Gothenburg", "Malmö", "Uppsala"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Recommended Candidates
      </h2>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Education
            </label>
            <select
              name="education"
              value={filters.education}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {educationOptions.map((edu) => (
                <option key={edu} value={edu}>
                  {edu}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {genderOptions.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
              min="18"
              max="100"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Finding the best candidates...</p>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">
            Error loading recommendations: {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-gray-600">Total Matches: {candidates.length}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {candidate.name}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {candidate.match_score}% Match
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-gray-600">
                      <span className="font-medium">Education:</span>{" "}
                      {candidate.education}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Location:</span>{" "}
                      {candidate.location}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Experience:</span>{" "}
                      {candidate.experience} years
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                      View Profile
                    </button>
                    <button className="flex-1 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CandidateRecommend;
