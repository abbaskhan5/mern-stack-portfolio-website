import React, { useState } from "react";
import { Globe, User } from "lucide-react";
import sign from '../images/sign.jpg'

const Navbar = () => {
  const [formType, setFormType] = useState(null); // 'signin', 'signup', or null

  const toggleForm = (type) => {
    setFormType(type);
  };

  const closeForm = () => {
    setFormType(null);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Company Logo */}
          <div className="text-2xl font-bold text-primary">Company</div>

          {/* Center Menu */}
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#partner"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Partner
            </a>
            <a
              href="#news"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              News
            </a>
            <a
              href="#provider"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Provider
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
              <span>EN</span>
            </button>
            <button
              onClick={() => toggleForm("signin")}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Form Modal */}
      {formType && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white dark:bg-gray-900 w-full max-w-4xl p-8 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2024/08/28/09/34/bridge-9003553_1280.jpg')`, // Replace with your image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              ✖
            </button>

            {/* Form Content */}
            <div className="bg-white  bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                {formType === "signin" ? "Sign In" : "Sign Up"}
              </h2>
              <form className="w-full max-w-md mx-auto">
                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                {/* Password */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                {/* Sign-Up Form Additional Fields */}
                {formType === "signup" && (
                  <div className="mb-6">
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Your Password"
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    {formType === "signin" ? "Sign In" : "Sign Up"}
                  </button>
                </div>
              </form>

              {/* Switch Form Link */}
              <p className="mt-6 text-sm text-center text-gray-400">
                {formType === "signin" ? (
                  <>
                    Don&#x27;t have an account yet?{" "}
                    <button
                      onClick={() => toggleForm("signup")}
                      className="text-blue-500 focus:outline-none focus:underline hover:underline"
                    >
                      Sign Up
                    </button>
                    .
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => toggleForm("signin")}
                      className="text-blue-500 focus:outline-none focus:underline hover:underline"
                    >
                      Sign In
                    </button>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
