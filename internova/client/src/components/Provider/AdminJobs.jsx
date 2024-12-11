import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";
import JobHeader from "../JobHeader/JobHeader";

const AdminJobs = () => {
  /*  useGetAllAdminJobs(); */
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useGetAllAdminJobs();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  return (
    <div>
      <JobHeader />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            New Jobs
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center h-[400px]">
            Loading...
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-[400px] text-red-500">
            Error: {error.message}
          </div>
        )}

        {/* Only render table when not loading and no error */}
        {!loading && !error && <AdminJobsTable />}
      </div>
    </div>
  );
};

export default AdminJobs;
