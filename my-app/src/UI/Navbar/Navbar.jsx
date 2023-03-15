import React, { useState, useEffect, useRef, useContext } from 'react';
import { BsListCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/context'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-xl w-full py-2 px-3 flex items-center justify-between">
      <div className='mx-auto'>
        <Link to="/tasks" className="text-white font-bold text-xl">
          <BsListCheck className='text-black w-10 h-10 mx-auto'/>
        </Link>
      </div>
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          className="text-gray-400 focus:outline-none"
          onClick={handleMenuToggle}
        >
          <img src="https://sun4-10.userapi.com/impg/ujwvgRL91_C1-FOmvRqFzCCm739I17nlEXn5Vw/Nb2ru4hg2bA.jpg?size=656x656&quality=96&sign=ee91a7582edcd6bc4a308b631a59c9b0&type=album" alt="" className="w-8 h-8 mx-auto rounded-full dark:bg-gray-500 aspect-square"/>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <Link
              to="/tasks"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Tasks
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              to="/login"
              onClick={logout}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
