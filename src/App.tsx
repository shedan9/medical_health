/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Home from "@/src/pages/Home";
import ArticleDetail from "@/src/pages/ArticleDetail";
import HealthEducation from "@/src/pages/HealthEducation";
import SearchResults from "@/src/pages/SearchResults";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<ArticleDetail />} />
            <Route path="/education" element={<HealthEducation />} />
            <Route path="/search" element={<SearchResults />} />
            {/* Fallback to home for demo purposes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
