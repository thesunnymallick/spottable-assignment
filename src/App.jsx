import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
