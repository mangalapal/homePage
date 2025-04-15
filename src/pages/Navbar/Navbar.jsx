// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" w-100 text-black flex items-center justify-between font-['Figtree'] font-[400] leading-[140%] text-[18px]">
      <div className="">
        <Link className="" to="/">
          <img src="./LEVELED.svg" alt="" />
        </Link>
      </div>
      <div>
        <ul className="d-flex justify-content-center align-items-center gap-5">
          <li className="nav-item hover:underline">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item hover:underline">
            <Link className="nav-link" to="/features">
              Features
            </Link>
          </li>
          <li className="nav-item hover:underline">
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
          </li>
          <div className="flex gap-[10px]">
            <li className="nav-item border border-[#000] rounded-[20px] px-3 py-[6px] ">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item border border-[#000] rounded-[20px] px-3 py-[6px] bg-black text-white">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
