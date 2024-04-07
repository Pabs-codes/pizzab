import React, { useState } from "react";
import Logo from "../AssetsN/Logo_pizzaboy-opti.webp";
import { HiOutlineMenu } from "react-icons/hi"; // Changed hamburger icon
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="topnavbar">
      <div className="topnavbar-left">
        <HiOutlineMenu
          className="hamburger-icon"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
      <div className="topnavbar-middle">
      <Link to="/" className="topnavbar-brand">
  <img src={Logo} alt="Pizza Boy Logo" className="topnavbar-logo" />
</Link>

      </div>
      <div className="topnavbar-right">
        <Link to="/login" className="topnavbar-link">
          My Account 👤
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
