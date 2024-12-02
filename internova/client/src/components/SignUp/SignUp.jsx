import React, { useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [file, setFile] = useState("");
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await fetch(
        "http://localhost:4000/api/v1/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName, email, password, role: userType }),
        }
      );

      /* if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      } */
      const result = await response.json();

      //
      if (response.ok) {
        toast.success(result.message);
        if (userType === "student") {
          navigate("/stdlogin");
        } else if (userType === "recruiter") {
          navigate("/emplogin");
        } else {
          navigate("/mentorlogin");
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <div className="s-form-wrapper">
        <form className="s-form" onSubmit={handleSignup}>
          <span className="title">Welcome</span>
          <span className="sub mb">Register to get full access now :)</span>
          <input
            id="file"
            type="file"
            onChange={() => setFile(e.target.file)}
          />
          <label className="avatar" htmlFor="file">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#ffffff"
                    d="M17.1813 16.3254L15.3771 14.5213C16.5036 13.5082 17.379 12.9869 18.2001 12.8846C19.0101 12.7837 19.8249 13.0848 20.8482 13.8687C20.8935 13.9034 20.947 13.9202 21 13.9202V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V13.7522C3.06398 13.7522 3.12796 13.7278 3.17678 13.679L4.45336 12.4024C5.31928 11.5365 6.04969 10.8993 6.71002 10.4791C7.3679 10.0605 7.94297 9.86572 8.50225 9.86572C9.06154 9.86572 9.6366 10.0605 10.2945 10.4791C10.9548 10.8993 11.6852 11.5365 12.5511 12.4024L16.8277 16.679C16.9254 16.7766 17.0836 16.7766 17.1813 16.679C17.2789 16.5813 17.2789 16.423 17.1813 16.3254Z"
                    opacity="0.1"
                  />
                  <path
                    strokeWidth={2}
                    stroke="#ffffff"
                    d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="#ffffff"
                    d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="#ffffff"
                    d="M21.0002 13.6702C18.907 12.0667 17.478 12.2919 15.1982 14.3459"
                  />
                  <path
                    strokeWidth={2}
                    stroke="#ffffff"
                    d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
                  />
                </g>
              </svg>
            </span>
          </label>
          <input
            type="text"
            className="s-input"
            placeholder="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            className="s-input"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="s-input"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <input
          type="password"
          className="s-input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /> */}
          <select
            className="s-input"
            required
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="student">Student</option>
            <option value="recruiter">Employer</option>
            <option value="mentor">Mentor</option>
          </select>
          <span className="sub">
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </span>
          <button className="s-register" type="submit">
            {loading ? "Sign up" : "Register"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
