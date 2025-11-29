// src/components/layout/Navbar.tsx
import { Link } from "react-router-dom";
import { LogIn, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 py-4 bg-white border-b border-gray-100">
      <Link to="/" className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full border border-gray-900 flex items-center justify-center">
          <span className="text-xs font-semibold">o</span>
        </div>
        <span className="text-sm sm:text-base font-semibold tracking-tight">foo-rum</span>
      </Link>

      {isAuthenticated ? (
        <button
          type="button"
          onClick={logout}
          className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
        >
          <span>Logout</span>
          <LogOut className="w-4 h-4" />
        </button>
      ) : (
        <Link
          to="/signin"
          className="text-xs sm:text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1 transition-colors"
        >
          <span>Login</span>
          <LogIn className="w-4 h-4" />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
