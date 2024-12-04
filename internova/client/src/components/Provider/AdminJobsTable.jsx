import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
const AdminJobsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useGetAllAdminJobs(); // Add this if not already present

  const { allAdminJobs = [], searchJobByText = "" } = useSelector((store) => {
    console.log("Current Redux Store:", store); // Add this debug log
    return store.job;
  });

  // Move console logs here for better debugging
  useEffect(() => {
    console.log("allAdminJobs updated:", allAdminJobs);
    console.log("searchJobByText:", searchJobByText);
  }, [allAdminJobs, searchJobByText]);

  const filteredJobs = allAdminJobs.filter((job) => {
    if (!searchJobByText.trim()) return true;
    return (
      job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
      job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
    );
  });

  // Add loading state handling
  if (loading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error loading jobs: {error.message}</div>;
  }
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/*      {filteredJobs?.map((job) => ( */}
          {filteredJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No jobs found
              </TableCell>
            </TableRow>
          ) : (
            filteredJobs.map((job) => (
              <TableRow key={job._id}>
                {/* <TableCell>{job?.company?.name || "N/A"}</TableCell> */}
                <TableCell>
                  {job.company?.name ||
                    (typeof job.company === "string" ? "Loading..." : "N/A")}
                </TableCell>
                <TableCell>{job?.title || "N/A"}</TableCell>
                <TableCell>{job?.createdAt?.split("T")[0] || "N/A"}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent>
                      <div
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                      <div
                        onClick={() =>
                          navigate(`/admin/jobs/${job._id}/applicants`)
                        }
                        className="flex items-center gap-2 cursor-pointer mt-2"
                      >
                        <Eye className="w-4" />
                        <span>Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;

/* const AdminJobsTable = () => {
  const dispatch = useDispatch();
  const { allAdminJobs = [], searchJobByText = "" } = useSelector(
    (store) => store.job
  );
  // Add these console logs
  console.log("allAdminJobs:", allAdminJobs);
  console.log("searchJobByText:", searchJobByText);

  const navigate = useNavigate();
  const filteredJobs = allAdminJobs.filter((job) => {
    if (!searchJobByText.trim()) return true;
    // Add trim() to handle empty strings better
    return (
      job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
      job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
    );
  });

  console.log("filteredJobs:", filteredJobs); */

/*   setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]); */
