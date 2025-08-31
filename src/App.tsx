import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FigmaPageTemplate from './components/FigmaPageTemplate';
import SelectDegree from './components/SelectDegree';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<FigmaPageTemplate />} />
          <Route path="/select-degree" element={<SelectDegree />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
