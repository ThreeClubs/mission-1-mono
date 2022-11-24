import React from "react";

function MobileNav({ visible, onClose }) {
  if (!visible) return null;

  const handleNavToLogin = (e) => {
    onClose();
  };

  return (
    <div className=" fixed inset-0 bg-opacity-50 backdrop-blur-sm bg-gray-900 flex">
      <nav className="w-full pt-2 border-t-2 border-amber-400 sm:hidden">
        <ul className="flex flex-col -mb-6 mx-2">
          <li className="px-4 py-2 text-pink-600 bg-blue-700 flex justify-center items-center border-2 m-1 border-blue-200 font-bold active:bg-blue-600 active:border-amber-400">
            Home
          </li>
          <li className="px-4 py-2 text-pink-600 bg-blue-700 flex justify-center items-center border-2 m-1 border-blue-200 font-bold active:bg-blue-600 active:border-amber-400">
            About
          </li>
          <li className="px-4 py-2 text-pink-600 bg-blue-700 flex justify-center items-center border-2 m-1 border-blue-200 font-bold active:bg-blue-600 active:border-amber-400">
            Contact Us
          </li>
          <li
            onClick={handleNavToLogin}
            className="px-4 py-2 text-blue-100 bg-amber-600 flex justify-center items-center border-2 m-1 border-blue-200 font-bold active:bg-amber-400 active:border-amber-300"
          >
            Login
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
