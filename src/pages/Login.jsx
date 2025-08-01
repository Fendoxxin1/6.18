import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-sm bg-white border rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-center text-green-700 mb-6">
          Kirish
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Email manzil
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Parol</label>
            <input
              type="password"
              placeholder="Parol"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-green-700 text-sm hover:underline"
            >
              Parolni unutdingizmi?
            </button>
          </div>

          <Link to="/">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
              Kirish
            </button>
          </Link>

          <Link
            to="/"
            className="text-center text-gray-600 text-sm hover:underline mt-2"
          >
            Orqaga qaytish
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
