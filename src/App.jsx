import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <div className="px-[100px] ">
        <div className="sticky top-0 z-10 bg-white pt-[42px]">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />  */}
        </Routes>
      </div>
    </>
  );
}

export default App;
