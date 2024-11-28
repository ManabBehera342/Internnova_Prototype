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
          <Route path="/jobseeker" element={<SeekHm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
