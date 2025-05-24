import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className='bg-blue-900 text-amber-50 px-5 py-7'>
        <div className='flex flex-col md:flex-row md:space-x-7 space-y-5 md:space-y-0'>
          <div className='flex-1 font-medium'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat fuga culpa tempora eaque fugiat nemo quidem eveniet doloremque excepturi error quasi, dolor sequi tenetur sed dicta voluptatem. Magnam, sequi.</p>
          </div>
          <div className='flex-1 '>
                <ul className='font-medium' >
                    <li><a href="/">All Products</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                    <li><a href="/phones">Electronics</a></li>
                </ul>
          </div>
          <div className='flex-1 font-medium '>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa mollitia amet laborum recusandae nisi suscipit harum, placeat doloremque aliquid provident nesciunt odio, magnam quisquam obcaecati, voluptas est porro vitae nulla.</p>
          </div>
          <div className='flex-1 font-medium'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit laudantium corporis deleniti tenetur cumque dignissimos doloribus ducimus, vero facilis ullam architecto cum, debitis eius magnam natus modi maxime error?</p>
          </div>
        </div>
      </div>
      
      <div className='bg-blue-900 text-amber-100 flex flex-col md:flex-row justify-between items-center p-4 space-y-4 md:space-y-0'>
        <div className='text-center md:text-left'>
          <h4 className='text-[16px] md:text-[20px]'>All Rights Reserved</h4>
        </div>
        <div className='flex space-x-6 text-white p-7'>
          <span><FaInstagram size={18} /></span>
          <span><FaFacebook size={18} /></span>
          <span><FaXTwitter size={18} /></span>
        </div>
      </div>
    </>
  );
}
