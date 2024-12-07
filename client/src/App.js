import React from 'react';
import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ModelsPage from './pages/ModelsPage';

const App = () => {
  return (
    <Routes>
      {/* Define Layout as the parent route */}
      <Route path="/" element={<Layout />}>
        {/* Nested route for Home */}
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/models' element={<ModelsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
