import React from 'react'

function SignUp() {
  return (
    <div className="bg-blue-900 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black">
      <h2 className="py-1 px-8 font-bold text-xl text-gray-300">
        Not a member? Create an account below!
      </h2>

      <form
        className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0"
        action="#"
        method="post"
        autocomplete="off"
      >
        <div className="flex flex-col md:flex-row md:-mx-2">
          <label for="first_name" className="sr-only">
            First name
          </label>
          <input
            className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
            type="text"
            placeholder="First name"
            name="first_name"
          />

          <label for="last_name" className="sr-only">
            Last name
          </label>
          <input
            className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
            type="text"
            placeholder="Last name"
            name="last_name"
          />
        </div>

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
            name="title"
          />
        </div>

        <div className="flex flex-col md:flex-row md:-mx-2">
          <button className="bg-blue-600 text-sm mt-4 md:mx-2 rounded-lg py-2 px-4 block w-full">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp