import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import ElectricityBill from "./pages/ElectricityBill";
import AttendanceChecker from "./pages/AttendanceChecker";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/activity1" element={<Login />} />

        <Route path="/activity2" element={<GradeEvaluation />} />

        <Route path="/activity3" element={<PasswordChecker />} />

        <Route path="/activity4" element={<ElectricityBill />} />

        <Route path="/activity5" element={<AttendanceChecker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
