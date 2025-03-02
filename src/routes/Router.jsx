import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Adoptions from "../pages/Adoptions";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/api-data" element={<Adoptions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;