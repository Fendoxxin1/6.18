import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
