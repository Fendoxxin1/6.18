import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const open = (user) => {
    setSelected(user);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setSelected(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (loading) return <p className="text-center mt-10">Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Foydalanuvchilar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-28 h-28 rounded-full object-cover border border-green-300"
              />
              <h3 className="mt-4 font-semibold text-lg">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <button
                onClick={() => open(user)}
                className="mt-4 px-4 py-1 rounded bg-green-600 text-white hover:bg-green-700"
              >
                Batafsil
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={close}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="float-right text-lg text-gray-500 hover:text-red-500"
            >
              ×
            </button>

            <div className="flex flex-col items-center mt-2">
              <img
                src={selected.image}
                alt={selected.firstName}
                className="w-24 h-24 rounded-full border border-green-400 object-cover"
              />
              <h2 className="mt-4 font-bold text-xl text-green-700">
                {selected.firstName} {selected.lastName}
              </h2>
              <p className="text-gray-600 text-sm">{selected.email}</p>
              <p className="text-gray-600 text-sm">{selected.phone}</p>
              <p className="mt-2 font-medium text-gray-700">
                {selected.address.city}, {selected.address.state}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
