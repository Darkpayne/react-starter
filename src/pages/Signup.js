import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../validation/YupValidation";
import { useToastify, Notification } from "../app/notification";

const Signup = () => {
  const { createToast } = useToastify();
  const onSubmit = (values, actions) => {
    createToast({ msg: "success", dataType: true });
    console.log(actions);
    actions.resetForm();
    alert(JSON.stringify(values, null, 2));
  };
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  console.log(errors);
  return (
    <div className="mx-auto container flex justify-center items-center">
      <div className="bg-white px-10 py-5 my-10 flex max-w-md flex-col w-full shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div id="input" className="flex flex-col w-full my-5">
            <label
              htmlFor="username"
              className="text-gray-500 flex justify-between items-center mb-2"
            >
              <span>Username</span>
              {errors.username && touched.username && (
                <p className="text-red-500 text-xs mx-2 mt-1 font-semibold">
                  {errors.username}
                </p>
              )}
            </label>
            <input
              type="text"
              id="username"
              placeholder="Please insert your username"
              className={`appearance-none border-2 bg-transparent rounded-lg px-4 py-2 placeholder-gray-400 outline-none  ${
                errors.username && touched.username ? "border-red-500" : ""
              } focus:shadow-lg`}
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
            />
          </div>
          <div id="input" className="flex flex-col w-full my-5">
            <label
              htmlFor="email"
              className="text-gray-500 flex justify-between items-center mb-2"
            >
              <span>Email</span>
              {errors.email && touched.email && (
                <p className="text-red-500 text-xs mx-2 mt-1 font-semibold">
                  {errors.email}
                </p>
              )}
            </label>
            <input
              type="email"
              id="email"
              placeholder="Please insert your username"
              className={` border-2 bg-transparent rounded-lg px-4 py-2 placeholder-gray-400  outline-none ${
                errors.email && touched.email ? "border-red-500" : ""
              } focus:shadow-lg`}
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
          </div>
          <div id="input" className="flex flex-col w-full my-5">
            <label
              htmlFor="password"
              className="text-gray-500 flex justify-between items-center mb-2"
            >
              <span> Password</span>
              {errors.password && touched.password && (
                <p className="text-red-500 text-xs mx-2 mt-1 font-semibold">
                  {errors.password}
                </p>
              )}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Please insert your password"
              className={`appearance-none border-2 bg-transparent rounded-lg px-4 py-2 placeholder-gray-400 outline-none  ${
                errors.password && touched.password ? "border-red-500" : ""
              } focus:shadow-lg`}
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
          </div>
          <div id="input" className="flex flex-col w-full my-5">
            <label
              htmlFor="confirmPassword"
              className="text-gray-500 flex justify-between items-center mb-2"
            >
              <span> Confirm Password</span>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-xs mx-2 mt-1 font-semibold">
                  {errors.confirmPassword}
                </p>
              )}
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Please confirm your password"
              className={`appearance-none border-2 bg-transparent rounded-lg px-4 py-2 placeholder-gray-400 outline-none  ${
                errors.confirmPassword && touched.confirmPassword
                  ? "border-red-500"
                  : ""
              } focus:shadow-lg`}
              onChange={handleChange}
              value={values.confirmPassword}
              onBlur={handleBlur}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </div>
                <div className="font-bold">Sign up</div>
              </div>
            </button>
            <div className="flex justify-evenly mt-5">
              <Link
                to="/signin"
                className="w-full text-center font-medium text-gray-500"
              >
                Sign In!
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Notification />
    </div>
  );
};

export default Signup;
