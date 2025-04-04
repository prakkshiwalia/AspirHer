import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discussions from './components/Discussions';
import Mentorship from './components/Mentorship';
import Events from './components/Events';
import Toolkits from './components/Toolkits';
import Sitemap from './components/Sitemap';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/events" element={<Events />} />
            <Route path="/toolkits" element={<Toolkits />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;