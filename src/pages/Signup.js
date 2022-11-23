import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="mx-auto h-screen container flex justify-center items-center">
          <div className="bg-white p-10 flex max-w-lg flex-col w-full shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
              Sign Up
            </h2>
            <form  onSubmit={formik.handleSubmit}>
              <div id="input" className="flex flex-col w-full my-5">
                <label for="firstName" className="text-gray-500 mb-2"
                  >First Name</label
                >
                <input
                  type="text"
                  id="firstName"
                  placeholder="Please insert your username"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label for="lastName" className="text-gray-500 mb-2"
                  >Last Name</label
                >
                <input
                  type="text"
                  id="lastName"
                  placeholder="Please insert your username"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label for="email" className="text-gray-500 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  placeholder="Please insert your username"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label for="password" className="text-gray-500 mb-2"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  placeholder="Please insert your password"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="submit"
                  className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">Sign up</div>
                  </div>
                </button>
                <div className="flex justify-evenly mt-5">
                  
                  <Link
                    to="/signup"
                    className="w-full text-center font-medium text-gray-500"
                    >Sing In!</Link>
                </div>
              </div>
            </form>
          </div>
    </div>
  )
}

export default Signup