import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === "" && password.trim() === "") {
      setMessage("Please enter username and password.");
      return;
    }

    if (username.trim() === "" || password.trim() === "") {
      setMessage("Please enter username and password.");
      return;
    }

    if (username === "Kevine" && password === "12345") {
      setLoggedIn(true);
      setMessage("Login successful!");
    } else {
      setMessage("Invalid username or password.");
      setLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <main className="flex min-h-[calc(100vh-66px)] items-start justify-center bg-slate-100 px-5 py-58px">
      <div className="w-full max-w-415px overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-[0_2px_5px_rgba(15,23,42,0.12)]">
        <div className="bg-[#4f3df5] px-6 py-6 text-white">
          <h1 className="text-[21px] font-bold">Login Authentication</h1>

          <p className="mt-1 text-sm text-white/90">Activity 1</p>
        </div>

        <div className="p-6">
          {!loggedIn ? (
            <form onSubmit={handleLogin}>
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
                  Username
                </label>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="h-43px w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="h-43px w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <button
                type="submit"
                className="mt-4 h-11 w-full rounded-lg bg-[#4f3df5] text-sm font-semibold text-white shadow-sm transition hover:bg-[#4338ca]"
              >
                Login
              </button>

              {message && (
                <div className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
                  {message}
                </div>
              )}

              <p className="mt-4 text-center text-[12px] text-indigo-400">
                Sample credentials — Username: Kevine, Password: 12345
              </p>
            </form>
          ) : (
            <div className="text-center">
              <div className="rounded-lg bg-green-50 px-4 py-4 text-green-700">
                <p className="text-sm font-semibold">Welcome, {username}!</p>

                <p className="mt-1 text-xs">{message}</p>
              </div>

              <button
                onClick={handleLogout}
                className="mt-5 h-11 w-full rounded-lg bg-[#4f3df5] text-sm font-semibold text-white transition hover:bg-[#4338ca]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Login;
