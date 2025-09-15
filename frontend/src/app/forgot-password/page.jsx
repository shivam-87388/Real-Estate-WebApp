'use client'
import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-neutral-950">
      {/* Main Box with border + shadow */}
      <div className="w-full max-w-md mt-7 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          {/* Heading */}
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forgot Password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Remember your password?{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                href="/login"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            {/* Form */}
            <form>
              <div className="grid gap-y-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700"
                >
                  Reset Password
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
