import React from "react";
import LoginModal from "../components/LoginModal";
import MobileNav from "../components/MobileNav";
import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleModalOnClose = () => {
    setShowModal(false)
  };

  const handleNavToLogin = () => {
    setShowMobileNav(false)
    setShowModal(true)
  }

  return (
    <header className="w-full flex flex-col justify-center border-b-4 border-amber-500">
      <div className="w-full bg-blue-700 py-3 px-4">
        <div className="flex items-center justify-between text-amber-500 max-w-4xl m-auto">
          <div className="flex items-center">
            <div className="rounded-full border border-2 border-amber-400 p-2 bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <span className="ml-4 font-bold italic text-2xl">Searchify</span>
          </div>

          <div className="hidden sm:w-full sm:flex sm:justify-end items-center">
            <nav>
              <ul className="flex items-center">
                <li className="px-4 py-2 border-2 border-blue-700 font-bold hover:bg-blue-600 hover:border-amber-400">
                  Home
                </li>
                <li className="px-4 py-2 border-2 border-blue-700 font-bold hover:bg-blue-600 hover:border-amber-400">
                  About
                </li>
                <li className="px-4 py-2 border-2 border-blue-700 font-bold hover:bg-blue-600 hover:border-amber-400">
                  Contact Us
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 ml-6 border font-bold text-amber-50  border-2 border-solid border-amber-50 hover:bg-blue-600 active:text-gray-100 active:border-gray-100 active:text-gray-100 active:bg-amber-700"
            >
              Login
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowMobileNav(true)}
            className="block text-amber-400 hover:text-amber-300 active:text-amber-500 sm:hidden"
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

      <MobileNav
        visible={showMobileNav}
        onClose={handleNavToLogin}
        />

      <LoginModal
        onClose={handleModalOnClose}
        visible={showModal}
      />

      <div className="bg-[url('/images/painted-clouds.webp')] bg-cover">
        <div className="my-4 flex flex-col max-w-4xl m-auto py-3 px-4">
          <h1 className="text-4xl w-3/4 sm:w-1/2 font-bold leading-normal sm:0 ml-4 text-blue-900 sm:pb-4 sm:pt-6">
            Welcome to the search engine of your dreams.
          </h1>
          <div className="mt-4 flex flex-col justify-center items-center sm:flex-row">
            <input
              className="mt-2 px-4 py-2 sm:w-1/2 w-11/12 focus:outline-none"
              type="text"
              placeholder="It all begins here..."
              alt="search field"
              aria-label="search field"
            ></input>
            <button
              type="submit"
              className="bg-amber-500 text-gray-100 font-bold mt-2 px-4 py-3 text-xs uppercase sm:w-20 w-11/12"
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
