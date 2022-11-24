import React from "react";
import LoginModal from "../components/LoginModal";
import MobileNav from "../components/MobileNav";
import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleModalOnClose = () => {
    setShowModal(false);
  };

  const handleNavToLogin = () => {
    setShowMobileNav(false);
    setShowModal(true);
  };

  return (
    <header className="w-full flex flex-col justify-center border-b-4 border-pink-700">
      <div className="w-full bg-white py-3 px-4">
        <div className="flex items-center justify-between text-blue-500 max-w-4xl m-auto">
          <div className="flex items-center">
            <img src="/images/turners_logo.png" alt="turners logo" />
          </div>
          <div className="hidden sm:w-full sm:flex sm:justify-end items-center">
            <nav>
              <ul className="flex items-center">
                <li className="px-4 py-2 border border-white font-bold hover:border-blue-500">
                  Home
                </li>
                <li className="px-4 py-2 border border-white font-bold hover:border-blue-500">
                  About
                </li>
                <li className="px-4 py-2 border border-white font-bold hover:border-blue-500">
                  Contact Us
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 ml-6 border font-bold text-pink-600 border border-solid border-pink-600 hover:bg-blue-500 hover:text-white active:text-gray-100 active:border-gray-100 active:text-gray-100 active:bg-pink-700"
            >
              Login
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowMobileNav(true)}
            className="block text-pink-400 hover:text-pink-300 active:text-pink-700 sm:hidden"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav visible={showMobileNav} onClose={handleNavToLogin} />

      <LoginModal onClose={handleModalOnClose} visible={showModal} />

      <div className="bg-blue-600">
        <div className="my-4 flex flex-col max-w-4xl m-auto py-3 px-4">
          <div className="mt-4 flex flex-col justify-center items-center sm:flex-row">
            <input
              className="mt-2 px-4 py-2 sm:w-1/2 w-11/12 focus:outline-none"
              type="text"
              placeholder="Over 3000 cars at your fingertips"
              alt="search field"
              aria-label="search field"
            ></input>
            <button
              type="submit"
              className="bg-pink-700 text-gray-100 font-bold mt-2 px-4 py-3 text-xs uppercase sm:w-20 w-11/12"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
