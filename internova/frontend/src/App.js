import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Website from "./pages/Website";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Faq from "./components/Faq/Faq";
import Login from "./components/Login/Login";
import EmpLog from "./components/Login/Emp-login/EmpLog";
import StdLog from "./components/Login/Std-Login/StdLog";
import Landing from "./components/Landing/Landing";

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
          <Route path="/emplogin" element={<EmpLog />} />
          <Route path="/stdlogin" element={<StdLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
