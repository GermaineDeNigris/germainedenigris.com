import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import MainGrid from './Components/MainGrid';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';
import ProjectPage from './Components/ProjectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Conditional Rendering based on the route */}
        <RouteCondition />
        <Routes>
          <Route path="/" element={<MainGrid />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Helper component to handle conditional rendering
function RouteCondition() {
  let location = useLocation();

  // Check if the current pathname is not the product page
  if (location.pathname.indexOf("/project/") !== 0) {
    return <MainSection />;
  }

  // Return null if it's the product page
  return null;
}

export default App;
