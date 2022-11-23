import React from "react";

function LoginModal({ visible, onClose }) {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className=" fixed inset-0 bg-opacity-50 backdrop-blur-sm bg-gray-900 flex"
    >
      <div className="py-12 flex flex-col items-center bg-gray-100 bg-opacity-90 w-full m-auto max-w-2xl">
        <div className="flex items-center text-amber-600">
          <div className="rounded-full border border-2 border-amber-400 p-2">
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
          <span className="ml-4 font-bold italic text-2xl">
            Searchify <span className="not-italic text-blue-600">Login</span>
          </span>
        </div>
        <form
          className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0"
          action="#"
          method="post"
          autocomplete="on"
        >
          <div className="flex flex-col md:flex-row md:-mx-2">
            <label for="email" className="sr-only">
              Your email
            </label>
            <input
              className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
              type="email"
              placeholder="john@email.com"
              name="email"
            />

            <label for="title" className="sr-only">
              Password
            </label>
            <input
              className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
              type="password"
              placeholder="Password"
              name="password"
            />
            
          </div>

          <div className="flex flex-col md:flex-row md:-mx-2">
            <button className="bg-blue-600 text-sm mt-4 md:mx-2 rounded-lg py-2 px-4 block w-full">
              Login
            </button>
          </div>
        </form>
        <p id="modalToSignUp" className="text-gray-700 py-4">
          Not a registered user? Sign-up{" "}
          <button>
            here
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
