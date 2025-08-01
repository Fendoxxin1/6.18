import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 border-b-2 border-green-600 pb-1"
      : "text-gray-600 hover:text-green-600";

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-lg font-bold text-green-700">
            Logo
          </NavLink>
        </div>

        <nav className="flex flex-col md:flex-row gap-4 text-sm font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/user" className={linkClass}>
            Users
          </NavLink>
          <NavLink to="/posts" className={linkClass}>
            Posts
          </NavLink>
        </nav>

        <div className="flex justify-end">
          <NavLink to="/login">
            <button className="border border-green-600 text-green-700 px-4 py-1.5 rounded hover:bg-green-600 hover:text-white transition-colors text-sm font-semibold">
              Sign in
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
