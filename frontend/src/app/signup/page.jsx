'use client'
import React from "react";

const CreateAccount = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-neutral-950">
      <div className="w-full max-w-md mt-7 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Create an Account
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                href="/login"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              {/* Google Icon */}
              <svg className="w-4 h-auto" width={46} height={47} viewBox="0 0 46 47" fill="none">
                <path d="M46 24.0287C46 22.09 ..." fill="#4285F4" />
              </svg>
              Sign up with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>

            {/* Form */}
            <form>
              <div className="grid gap-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2 dark:text-white">Name</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="py-2.5 sm:py-3 px-4 border border-gray-300 rounded-lg w-full text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="py-2.5 sm:py-3 px-4 border border-gray-300 rounded-lg w-full text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm mb-2 dark:text-white">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                    className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm mb-2 dark:text-white">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                    className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm mb-2 dark:text-white">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Enter confirm password"
                    required
                    className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center">
                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700" />
                  <label className="ms-3 text-sm dark:text-white">
                    I accept the{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium dark:text-blue-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
