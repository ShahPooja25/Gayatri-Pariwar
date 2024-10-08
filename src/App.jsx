import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Campaign from './pages/Campaign';
import Report from './pages/Report';
import Form from './pages/Form'; // Ensure this path is correct

function App() {
  const [count, setCount] = useState(0);
  console.log('app');

  return (
    
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Campaign" element={<Campaign />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
