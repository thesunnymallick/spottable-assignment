import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home';
import './App.css';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const toggleNavBar = () => {
    console.log('Togle');
    setOpen(!open);
  };
  return (
    <BrowserRouter>
      <Navbar toggleNavBar={toggleNavBar} />
      <Routes>
        <Route
          path="/"
          element={<Home open={open} />}
        />
        <Route
          path="/:id"
          element={<Home open={open} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
