import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
//import Button from "@mui/material/Button";
import Home from "./Pages/Home/Home";
//import Aboutus from "./Pages/Aboutus/Aboutus";
import Coding from "./Pages/Coding/Coding";
import MCQS from "./Pages/MCQs/MCQS";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Navbar from "./Common/Navbar/Navbar";
import CodingPage from "./Pages/Coding/CodingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element="Aboutus" /> */}
        <Route path="/coding" element={<Coding />} />
        <Route path="/solve" element={<CodingPage />} />
        <Route path="/mcqs" element={<MCQS />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Button variant="contained">Hello MUI</Button>;
    // </div>
  );
}

export default App;
