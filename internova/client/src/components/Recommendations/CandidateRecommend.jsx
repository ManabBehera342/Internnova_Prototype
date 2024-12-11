/* /* import { useCandidateRecommendations } from "../../hooks/useCandidateRecommendations.js";
import { useState } from "react";

const CandidateRecommend = ({ jobId }) => {
  const { loading, error, recommendations, getRecommendations } =
    useCandidateRecommendations();
  const [formData, setFormData] = useState({
    country: "",
    education: "",
    gender: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecommendations({
      jobId,
      ...formData,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Country"
          value={formData.country}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, country: e.target.value }))
          }
        />
        
        <button type="submit">Get Recommendations</button>
      </form>

      {loading && <div>Loading recommendations...</div>}
      {error && <div>Error: {error}</div>}

      {recommendations.map((candidate) => (
        <div key={candidate._id}>
          
        </div>
      ))}
    </div>
  );
};
export default CandidateRecommend;
 */
/* import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CandidateRecommend = ({ jobId }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    country: "Sweden",
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

      //Filters *
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
 */ /* 
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
const CandidateRecommend = ({ jobId = " " }) => {
  const [matchResult, setMatchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMatchCandidates = async () => {
    if (!jobId.trim()) {
      setError("No job ID provided");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Get job_id from props or state
      const candidateData = {
        job_id: jobId || null,
        Country: "Sweden",
        Education: "Master",
        Gender: "Male",
        age: 35,
      };

      const response = await fetch("/api/candidates/match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(candidateData),
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setMatchResult(data);
    } catch (error) {
      console.error("Error matching candidates:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (jobId) {
      handleMatchCandidates();
    }
  }, [jobId]);
  return ( */
/*  */
/*  <div>
      <button onClick={handleMatchCandidates} disabled={loading}>
        {loading ? "Matching..." : "Match Candidates"}
      </button>

      {matchResult && (
        <div>
          <h3>Match Results:</h3>
          <pre>{JSON.stringify(matchResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CandidateRecommend;
 */ /* 
    <div className="p-4">
      <button
        onClick={handleMatchCandidates}
        disabled={loading || !jobId}
        className={`px-4 py-2 rounded ${
          loading || !jobId
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold`}
      >
        {loading ? "Matching..." : "Match Candidates"}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {matchResult && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Match Results for Job ID: {jobId}
          </h3>
          <pre className="bg-gray-100 p-4 rounded mt-2 overflow-auto">
            {JSON.stringify(matchResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

// Add prop validation if you're using PropTypes
CandidateRecommend.propTypes = {
  jobId: PropTypes.string.isRequired,
};

export default CandidateRecommend;
 */ import React, { useState } from "react";
import axios from "axios";
const CandidateRecommend = () => {
  const [jobDetails, setJobDetails] = useState({
    job_id: "",
    Country: "",
    location: "",
    Education: "",
    Gender: "",
    age: "",
  });
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post("/api/v1/recommendations", jobDetails);
      setRecommendations(response.data);
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setError(err.message || "An error occurred."); // Set the error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Get Candidate Recommendations</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        {/* Input fields for job details */}
        <input
          type="text"
          name="job_id"
          placeholder="Job ID"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Country"
          placeholder="Country"
          onChange={handleChange}
          required
        />
        {/*   <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        /> */}
        <input
          type="text"
          name="Education"
          placeholder="Education"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Gender"
          placeholder="Gender"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Get Recommendations"}
        </button>
      </form>
      {loading && <p>Loading recommendations...</p>}
      {recommendations.length > 0 && (
        <div>
          <h3>Recommended Candidates:</h3>
          <ul>
            {recommendations.map((candidate) => (
              <li key={candidate._id || candidate.id}>
                {" "}
                {/* Important: Add a unique key */}
                {candidate.name || candidate.candidateName} -{" "}
                {candidate.skills?.join(", ") ||
                  candidate.candidateSkills?.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
      {recommendations.length === 0 && !loading && (
        <p>No recommendations yet.</p>
      )}
    </div>
  );
};

export default CandidateRecommend;
