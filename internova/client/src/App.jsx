import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Login from "./components/Login/Login";
import EmpLog from "./pages/Emp-login/EmpLog";
import StdLog from "./pages/Std-Login/StdLog";
import Landing from "./components/Landing/Landing";
import SignUp from "./components/SignUp/SignUp";
import SeekHm from "./pages/JobSeeker/SeekerHome/SeekHm";
import Mentorship from "./pages/Mentorship/Mentorship";
import MentorLogin from "./pages/Mentorship/MentorLogin";
import JobPg from "./pages/JobSeeker/JobPg/JobPg";
import Jobs from "./components/Jobs/Jobs";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Job from "./components/job/Job";
import Companies from "./components/Provider/Companies";
import CompanyCreate from "./components/Provider/CompanyCreate";
import CompanySetup from "./components/Provider/CompanySetup";
import PostJob from "./components/Provider/PostJob";
import Applicants from "./components/Provider/Applicants";
import AdminJobs from "./components/Provider/AdminJobs";
import Browse from "./components/Browse";
import ProtectedRoute from "./components/Provider/ProtectedRoute";
/* import ProtectedRoute from "./components/Provider/ProtectedRoute"; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/emplogin" element={<EmpLog />} />
          <Route path="/stdlogin" element={<StdLog />} />
          <Route path="/mentorlogin" element={<MentorLogin />} />
          <Route path="/jobseeker" element={<SeekHm />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/jobpg" element={<JobPg />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDescription />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job" element={<Job />} />
          <Route path="/browse" element={<Browse />} />

          {/* provider */}
          <Route
            path="/admin/companies"
            element={
              <ProtectedRoute>
                <Companies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/companies/create"
            element={
              <ProtectedRoute>
                <CompanyCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/companies/:id"
            element={
              <ProtectedRoute>
                <CompanySetup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/jobs"
            element={
              <ProtectedRoute>
                <AdminJobs />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/jobs/create"
            element={
              <ProtectedRoute>
                <PostJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/jobs/:id/applicants"
            element={
              <ProtectedRoute>
                <Applicants />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
