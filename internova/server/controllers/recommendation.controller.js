import axios from "axios";

export const getJobRecommendations = async (req, res) => {
  try {
    const { userId } = req.body;

    console.log("Requesting recommendations for userId:", userId);

    // Call the ML API
    const response = await axios.post(
      "https://internova-api.onrender.com/match_jobs",
      {
        userId: userId.toString(), // Ensure userId is sent as string if needed
      }
    );

    console.log("ML API Response:", response.data);

    const recommendations = response.data;

    res.status(200).json({
      success: true,
      recommendations,
    });
  } catch (error) {
    // Enhanced error logging
    console.error("Error in job recommendations:", {
      message: error.message,
      stack: error.stack,
      mlApiError: error.response?.data,
      requestBody: req.body,
    });

    res.status(500).json({
      success: false,
      message: "Error fetching job recommendations",
      error: error.message,
      details: error.response?.data,
    });
  }
};
export const getCandidateRecommendations = async (req, res) => {
  try {
    const { jobId, country, education, gender, age } = req.body;

    // Call the ML API
    const response = await axios.post(
      "https://internova-api.onrender.com/match_candidates",
      {
        jobId,
        country,
        education,
        gender,
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
