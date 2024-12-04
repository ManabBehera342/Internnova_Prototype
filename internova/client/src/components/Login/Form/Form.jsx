/* import React from "react";
import "./Form.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setUser } from "../../../redux/authSlice";

const Form = ({ role }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("http://localhost:4000/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await response.json();
      if (response.ok) {
        //dispatch(setUser(response.data.user));
        toast.success(data.message); // Show success toast
        if (role === "student") {
          navigate("/jobseeker");
        } else if (role === "recruiter") {
          navigate("/jobprovider");
        } else {
          navigate("/mentor");
        }
      } else {
        toast.error(data.message); // Show error toast if response is not ok
      }
    } catch (error) {
      toast.error(error.message); // Handle any errors
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <div className="l-form-wrapper">
        <form
          className="l-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <svg
              height="20"
              viewBox="0 0 32 32"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
              </g>
            </svg>
            <input
              type="email"
              className="l-input"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex-column">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <svg
              height="20"
              viewBox="-64 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>
            <input
              type="password"
              className="l-input"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me </label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
          <button
            className="button-submit"
            disabled={loading}
            onClick={handleLogin}
          >
            {loading ? "Signing in..." : "Log In"}
          </button>
          <p className="p">
            Don&apos;t have an account?{" "}
            <NavLink to="/register">
              <span className="span">Sign Up</span>
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Form; */

///////
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { setLoading, setUser } from "../../../redux/authSlice";
import "./Form.css";

const Form = ({ role }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      dispatch(setLoading(true));

      const response = await fetch("http://localhost:4000/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        if (data && data.user) {
          dispatch(setUser(data.user));
          toast.success(data.message); // Show success toast

          setEmail("");
          setPassword("");

          // Navigate based on role
          if (data.user.role === "student") {
            navigate("/jobseeker");
          } else if (data.user.role === "recruiter") {
            navigate("/admin/companies");
          } else {
            navigate("/mentor");
          }
        } else {
          throw new Error("User data missing in response");
        }
      } else {
        toast.error(data.message || "Login failed!"); // Show error toast
      }
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error.message || "An unexpected error occurred.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="l-form-wrapper">
      <form
        className="l-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </g>
          </svg>
          <input
            type="email"
            className="l-input"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
          </svg>
          <input
            type="password"
            className="l-input"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex-row">
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button
          className="button-submit"
          disabled={loading}
          onClick={handleLogin}
        >
          {loading ? "Signing in..." : "Log In"}
        </button>
        <p className="p">
          Don&apos;t have an account?{" "}
          <NavLink to="/register">
            <span className="span">Sign Up</span>
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Form;

/////

////

////////////

/////

/* import React, { useEffect, useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { RadioGroup } from "../../ui/radio-group";
import { Button } from "../../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="patel@gmail.com"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="patel@gmail.com"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
          )}
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login; */
