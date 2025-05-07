import React from 'react';
import { IoLogoCodepen } from "react-icons/io";
import { CiSearch,CiShoppingCart ,CiUser,CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Shop from './Shop';
import { Routes,Route } from 'react-router-dom';

const Header = () => {
  return (
    <header className=''>
        <div className='h-8 bg-black'></div>
    <div className='h-[50vh]   '>
      <div className='first  '>
         <div className='flex h-[10vh] justify-between items-center px-20 py-10 text-2xl overflow-hidden'>
              <div className='Logo text-4xl '> <IoLogoCodepen /> </div>
                       <h1  className='font-bold pl-50'>LOGO</h1>
               <div className='icons flex h-fit w-fit gap-5 font-medium '>
                              <CiSearch />
                                <CiHeart/>
                                 <CiShoppingCart />
                                  <CiUser/>
                        <select name="lang" className='text-lg outline-none'>
                              <option value="English">ENG</option>
                               <option value="German">DEU</option>
                                <option value="Hindi">HIN</option>
                        </select>
                </div>
        </div>

             
            
        
            <nav className='h-[10vh] w-screen  flex justify-center border-b border-gray-300 '>
               <ul className='flex justify-center  font-semibold text-lg  items-center gap-15'>
                <li>
                  <Link to='/'>Shop</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                 </li>
                <li>
                  <Link >Stories</Link>
                </li>
                <li>
                  <Link to='/skills'>Skills</Link>
                </li>
                <li>
                  <Link>Contact-us</Link>
                </li>
               </ul>
            </nav>
       </div> 
         
         <div className='second w-screen h-[25vh] flex justify-center items-center border-t-0' >
            <div className='w-[50%] flex flex-col gap-5'>
                <h1 className='text-center text-4xl font-medium overflow-hidden'>Discover our Products</h1>
                <p className='text-center  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem magni voluptate explicabo, sunt facere qui repudiandae sint officia at?</p>
            </div>
         </div>
    </div>
    </header>  );
};

export default Header;
