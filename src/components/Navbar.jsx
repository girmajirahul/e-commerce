import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaRegClock, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      setIsFixed(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex flex-col">
      {/* Top Contact Bar */}
      <div className="hidden lg:flex h-auto text-white bg-[#282a74] w-full justify-evenly items-center p-2 text-sm">
  <div className="flex space-x-6">
    <div className="flex items-center"><FaPhoneAlt className="mr-2" /> +91 9021710342</div>
    <div className="flex items-center"><MdOutlineMailOutline className="mr-2" /> example@gmail.com</div>
    <div className="flex items-center"><FaRegClock className="mr-2" /> Mon to Sat 10am - 9pm</div>
  </div>
</div>


      {/* Navbar */}
      <nav
        className={`text-white bg-[#4d54fd] p-4 transition-all duration-300 flex flex-wrap items-center justify-between ${
          isFixed ? 'fixed top-0 left-0 right-0 z-50' : 'w-full'
        }`}
        data-aos="fade-down"
      >
        <div className="flex justify-between w-full md:w-auto items-center">
          <div className="text-lg font-bold">LOGO</div>
          {/* Hamburger Button (Mobile Only) */}
          <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:items-center md:space-x-6 ${
            menuOpen ? 'block' : 'hidden'
          } md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center font-medium mt-4 md:mt-0">
            <li><a href="/" className="hover:text-[#FF8201] block py-2">Home</a></li>
            <li><a href="/women" className="hover:text-[#FF8201] block py-2">Women Section</a></li>
            <li><a href="/Kids" className="hover:text-[#FF8201] block py-2">KIDS Section</a></li>
            <li><a href="/phones" className="hover:text-[#FF8201] block py-2">Electronics</a></li>
          </ul>

          <div className="flex justify-center items-center mt-4 md:mt-0 md:ml-4 space-x-4">
            <a href="/cart"><FaShoppingCart size={22} /></a>
            <a
              href="/register"
              className="bg-white text-blue-950 py-2 px-4 rounded-full font-medium"
            >
              Login / Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
