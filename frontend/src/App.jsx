import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HeroSection from "./components/sections/hero";
import CategorySection from "./components/sections/CategorySection";
import Footer from './components/layouts/Footer';
import BlogPage from "./components/BlogPage";
import CategoryPage from './components/CategoryPage';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CategorySection />
            </>
          }
        />

        {/* Blog Detail Page */}
        <Route path="/posts/:slug" element={<BlogPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
