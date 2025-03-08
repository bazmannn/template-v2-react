import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "@/pages/home/Home";
import About from "@/pages/about/About";
import Layout from "@/layouts/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;