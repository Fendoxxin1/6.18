import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (todo) => {
    setSelectedTodo(todo);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedTodo(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-lg animate-pulse">Yuklanmoqda...</p>
    );
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Vazifalar ro'yxati
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="border rounded-xl bg-white shadow p-5 hover:shadow-md transition cursor-pointer"
            onClick={() => openModal(todo)}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {todo.todo}
            </h3>
            <p
              className={`text-sm font-semibold ${
                todo.completed ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {todo.completed ? "Bajarilgan ✅" : "Bajarilmagan ⏳"}
            </p>
          </div>
        ))}
      </div>

      {selectedTodo && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-md w-[90%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              Vazifa tafsilotlari
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Vazifa:</span> {selectedTodo.todo}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Foydalanuvchi ID:</span>{" "}
              {selectedTodo.userId}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Status:</span>{" "}
              {selectedTodo.completed ? "Bajarilgan ✅" : "Bajarilmagan ⏳"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
