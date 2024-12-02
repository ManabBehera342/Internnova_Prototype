import React, { useState } from "react";
import "./JobHeader.css";
import { NavLink } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const JobHeader = () => {
  const { user } = useSelector((store) => store.auth);

  //
  // State to manage the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the profile picture URL
  const [profilePic, setProfilePic] = useState("default-profile-pic.jpg"); // Default profile picture
  // State to manage the dropdown menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  // Handle logout logic
  const handleLogout = () => {
    // Implement your logout logic here
    setProfilePic("default-profile-pic.jpg"); // Reset to default or handle as needed
    console.log("User  logged out");
    // Redirect to login page or perform other actions as needed
  };

  return (
    <nav className="jobnavbar">
      <div className="logo">
        <NavLink to="/">
          <img src="./images/logo.png" alt="logo" className="logoimg" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="jobhamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        {user && user.role === "recruiter" ? (
          <></>
        ) : (
          <>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/internships">Internships</NavLink>
            </li>
            <li>
              <NavLink to="/mentorship">Mentorship</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
          </>
        )}
        {/* {user?(
        <li className="profile-toggle">
          <img
            src={profilePic} // Use the state variable for the profile image
            alt="Profile"
            className="profile-pic"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          />):(
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick="./profile">Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )} */}
        {!user ? (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button variant="outline">Login</button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        {" "}
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </ul>
    </nav>
  );
};

export default JobHeader;

/* import React, { useState } from "react";
import "./JobHeader.css";
import { NavLink } from "react-router-dom";

const JobHeader = () => {
  // State to manage the hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="jobnavbar">
      <div className="logo">
        <NavLink to="/">
          <img src="./images/logo.png" alt="logo" className="logoimg" />
        </NavLink>
      </div>

      //Hamburger Menu 
      <div className="jobhamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      //Navbar Links 
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/internships">Internships</NavLink>
        </li>
        <li>
          <NavLink to="/mentorship">Mentorship</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
        <li className="profile-toggle">
          <a href="#profile" className="profile-link">
            Profile
          </a>
          <img
            src="profile-pic.jpg" // Replace with the path to the user's profile image
            alt="Profile"
            className="profile-pic"
          />
        </li>
      </ul>
    </nav>
  );
};

export default JobHeader;
 */

/* import React, { useState } from "react";
import "./JobHeader.css";
import { NavLink } from "react-router-dom";
import { User } from './../../../../server/models/user.model';

const JobHeader = () => {
  // State to manage the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the profile picture URL
  const [profilePic, setProfilePic] = useState("default-profile-pic.jpg"); // Default profile picture

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  // Mock login function to update the profile picture
  const handleLogin = () => {
    // Simulate a login action and update the profile picture
    const newProfilePic = "path/to/new/profile-pic.jpg"; // Replace with actual path or URL
    setProfilePic(newProfilePic);
  };

  return (
    <nav className="jobnavbar">
      <div className="logo">
        <NavLink to="/">
          <img src="./images/logo.png" alt="logo" className="logoimg" />
        </NavLink>
      </div>

     //hamburger menu
      <div className="jobhamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      // Navbar Links 
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/internships">Internships</NavLink>
        </li>
        <li>
          <NavLink to="/mentorship">Mentorship</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
        <li className="profile-toggle">
          <a href="#profile" className="profile-link">
            Profile
          </a>
          <img
            src={profilePic} // Use the state variable for the profile image
            alt="Profile"
            className="profile-pic"
          />
        </li>
      </ul>
    </nav>
  );
};

export default JobHeader;
 */
