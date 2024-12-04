import axios from "axios";

export const getJobRecommendations = async (req, res) => {
  try {
    const { userId } = req.body;

    // Call the ML API
    const response = await axios.post(
      "https://internova-api.onrender.com/match_jobs",
      {
        userId,
      }
    );

    // Process and filter recommendations if needed
    const recommendations = response.data;

    res.status(200).json({
      success: true,
      recommendations,
    });
  } catch (error) {
    console.error("Error in job recommendations:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching job recommendations",
      error: error.message,
    });
  }
};

export const getCandidateRecommendations = async (req, res) => {
  try {
    const { jobId, Country, location, Education, Gender, age } = req.body;

    // Call the ML API
    const response = await axios.post(
      "https://internova-api.onrender.com/candidate-recommendations",
      {
        jobId,
        Country,
        location,
        Education,
        Gender,
        age,
      }
    );

    // Process and filter recommendations if needed
    const recommendations = response.data;

    res.status(200).json({
      success: true,
      recommendations,
    });
  } catch (error) {
    console.error("Error in candidate recommendations:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching candidate recommendations",
      error: error.message,
    });
  }
};
