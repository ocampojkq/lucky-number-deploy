import React from 'react';
// import ReactDOM from "react-dom/client";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import TwoDigits from './pages/TwoDigits';
import ThreeDigits from './pages/ThreeDigits';
import FourDigits from './pages/FourDigits';
import SixDigits from './pages/SixDigits';
import SixFourtyTwo from './pages/SixFourtyTwo';
import SixFourtyFive from './pages/SixFourtyFive';
import SixFourtyNine from './pages/SixFourtyNine';
import SixFiftyFive from './pages/SixFiftyFive';
import SixFiftyEight from './pages/SixFiftyEight';

import NoPage from './pages/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="TwoDigits" element={<TwoDigits />} />
          <Route path="ThreeDigits" element={<ThreeDigits />} />
          <Route path="FourDigits" element={<FourDigits />} />
          <Route path="SixDigits" element={<SixDigits />} />
          <Route path="SixFourtyTwo" element={<SixFourtyTwo />} />
          <Route path="SixFourtyFive" element={<SixFourtyFive />} />
          <Route path="SixFourtyNine" element={<SixFourtyNine />} />
          <Route path="SixFiftyFive" element={<SixFiftyFive />} />
          <Route path="SixFiftyEight" element={<SixFiftyEight />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
