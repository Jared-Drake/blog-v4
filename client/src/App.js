import React from 'react';
import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      {/* Define Layout as the parent route */}
      <Route path="/" element={<Layout />}>
        {/* Nested route for Home */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
