import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Job from "../job/Job";

const JobRecommend = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const response = await axios.post(
          "https://internova-api.onrender.com/job-recommendations",
          {
            userId: user._id,
            skills: user.skills, // Assuming user has skills array
            experience: user.experience,
            // Add other relevant user data needed by the model
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        setRecommendations(response.data.recommendations);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching job recommendations:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchRecommendations();
    }
  }, [user]);

  if (loading) return <div>Loading recommendations...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="recommendations-container">
      <h2>Recommended Jobs for You</h2>
      <div className="recommendations-grid">
        {recommendations.map((job) => (
          <Job key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobRecommend;
