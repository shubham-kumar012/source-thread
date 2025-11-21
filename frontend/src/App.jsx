import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HeroSection from "./components/home/HeroSection";
import CategorySection from "./components/home/BlogCarousel";
import Footer from './components/layouts/Footer';
import BlogPage from "./components/pages/BlogPage";
import CategoryPage from './components/pages/CategoryPage';
import ReactLenis from 'lenis/react';

function App() {


  return (
    <ReactLenis
      root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2
        }}
    >
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
                <Footer />
              </>
            }
          />

          {/* Blog Detail Page */}
          <Route path="/posts/:slug" element={<BlogPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>

      </Router>
    </ReactLenis>
  )
}

export default App
