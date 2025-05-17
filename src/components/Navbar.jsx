import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      setIsFixed(window.scrollY > 280); // Trigger after hero section (300px height - some buffer)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='flex flex-col'>
      {/* Top Contact Bar */}
      <div className='h-[50px] text-white bg-[#282a74] w-full flex flex-col md:flex-row justify-evenly items-center p-2'>
      <div className='flex space-x-12 text-sm'>
    <div className='flex items-center'><FaPhoneAlt className="mr-1" /> +91 9021710342</div>
    <div className='flex items-center'><MdOutlineMailOutline className="mr-1" /> example@gmail.com</div>
    <div className='flex items-center'><FaRegClock className="mr-1" /> Mon to Sat 10am - 9pm</div>
  </div>
</div>      

      {/* Dynamic Navbar */}
      <nav
        className={`text-white bg-[#4d54fd] p-5 transition-all duration-300  ${
          isFixed
            ? 'fixed top-0 left-0 right-0 z-50 '
            : 'w-full'
        }`}
        data-aos="fade-down"
      >
        <ul className='flex justify-evenly items-center font-medium'>
          <li className="hover:text-[#FF8201]"><a href="/">Home</a></li>
          <li className="hover:text-[#FF8201]"><a href="/about">About Us</a></li>
          <li className="hover:text-[#FF8201]"><a href="/services">Services</a></li>
          <li className="hover:text-[#FF8201]"><a href="/contact">Contact Us</a></li>
          <li className="hover:text-[#FF8201]" ><a href="/cart"><FaShoppingCart  size={25}/></a></li>
          <li className="hover:text-[#FF8201]"><a href="/register" className='bg-[#ffff] text-blue-950  py-2 px-5 rounded-[20px] font-sans font-medium '>Login / Register</a></li>
        </ul>
      </nav>
    </header>
  );
}
