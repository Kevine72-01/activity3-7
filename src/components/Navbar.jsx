import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1250px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-base font-bold text-white shadow-md shadow-indigo-200">
            R
          </div>

          <div>
            <span className="block text-[17px] font-bold text-slate-900">
              React Activity Portal
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            className={`rounded-xl px-4 py-2.5 text-[13px] transition-all ${
              isActive("/")
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white shadow-md shadow-indigo-200"
                : "font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            Home
          </Link>

          <Link
            to="/activity1"
            className={`rounded-xl px-4 py-2.5 text-[13px] transition-all ${
              isActive("/activity1")
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white shadow-md shadow-indigo-200"
                : "font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            Activity 1
          </Link>

          <Link
            to="/activity2"
            className={`rounded-xl px-4 py-2.5 text-[13px] transition-all ${
              isActive("/activity2")
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white shadow-md shadow-indigo-200"
                : "font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            Activity 2
          </Link>

          <Link
            to="/activity3"
            className={`rounded-xl px-4 py-2.5 text-[13px] transition-all ${
              isActive("/activity3")
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white shadow-md shadow-indigo-200"
                : "font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            Activity 3
          </Link>

          <Link
            to="/activity4"
            className={`rounded-xl px-4 py-2.5 text-[13px] transition-all ${
              isActive("/activity4")
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white shadow-md shadow-indigo-200"
                : "font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            Activity 4
          </Link>

          <Link
            to="/activity5"
            className={`rounded-xl px-4 py-2.5 text-[13px] transition-all ${
              isActive("/activity5")
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white shadow-md shadow-indigo-200"
                : "font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            Activity 5
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
