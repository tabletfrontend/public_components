import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DynamicComponentLoader from './components/DynamicComponentLoader';
import { BookingBar }
 from '@tabletfrontend/component-library';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="public_components" element={<BookingBar />} />
        <Route path="public_components/:componentName" element={<DynamicComponentLoader />} />
      </Routes>
    </Router>
  );
}

export default App;