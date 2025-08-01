import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPost(null);
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
        Postlar ro'yxati
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-xl bg-white shadow p-5 hover:shadow-md transition cursor-pointer"
            onClick={() => openModal(post)}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
            <div className="mt-3 text-xs text-gray-500">
              Tags: {post.tags.join(", ")}
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
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
              {selectedPost.title}
            </h2>
            <p className="text-gray-700 text-sm mb-3">{selectedPost.body}</p>
            <div className="text-gray-600 text-sm">
              Muallif ID: {selectedPost.userId}
            </div>
            <div className="text-gray-600 text-sm">
              Tags: {selectedPost.tags.join(", ")}
            </div>
            <div className="text-gray-600 text-sm">
              Reaksiyalar: {selectedPost.reactions}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
