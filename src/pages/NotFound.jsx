import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold text-gray-800 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Page not found :(
        </h2>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
        >
          Go home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
