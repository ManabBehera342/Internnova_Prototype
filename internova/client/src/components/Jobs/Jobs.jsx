/* import React, { useEffect, useState } from "react";
/* import FilterCard from "./FilterCard"; 
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./Jobs.css"; 
import Job from "../job/Job";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div>
    
      <div className="jobs-container">
        <div className="jobs-flex">
          <div className="filter-card-wrapper">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <span className="no-jobs-message">Job not found</span>
          ) : (
            <div className="jobs-list">
              <div className="jobs-grid">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
 */

/* import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import Job from "../job/Job";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import JobHeader from "../JobHeader/JobHeader";
import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
/* 
const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  console.log("allJobs:", allJobs); // Add this line
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    useGetAllJobs();
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);
 */
/*
const Jobs = () => {
  const dispatch = useDispatch(); // Add this
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  // Add this effect to fetch jobs when component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // const response = await fetch(`${JOB_API_END_POINT}/get`); 
        const token = localStorage.getItem("token"); // Get token from localStorage
        const response = await fetch(`${JOB_API_END_POINT}/get`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        dispatch(setAllJobs(data)); // Dispatch jobs to Redux store
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [dispatch]);
  return (
    <div>
      <JobHeader />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs; */

import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import Job from "./../job/Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import JobHeader from "./../JobHeader/JobHeader";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
  const { allJobs = [], searchedQuery } = useSelector((store) => store.job); // Add default empty array
  const [filterJobs, setFilterJobs] = useState([]); // Initialize with empty array

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job?.title?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job?.description
            ?.toLowerCase()
            .includes(searchedQuery.toLowerCase()) ||
          job?.location?.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <JobHeader />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
