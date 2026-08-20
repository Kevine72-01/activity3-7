import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    setError("");
    setResult(null);

    if (password === "") {
      setError("Please enter a password.");
      return;
    }

    const length = password.length;

    let strength;
    let message;
    let level;

    if (length < 6) {
      strength = "Weak Password";
      message = "Status: Weak – Create a stronger password.";
      level = 1;
    } else if (length <= 9) {
      strength = "Medium Password";
      message = "Status: Weak – Create a stronger password.";
      level = 2;
    } else {
      strength = "Strong Password";
      message = "Status: Strong – You can use this password.";
      level = 3;
    }

    setResult({
      strength,
      message,
      level,
      length,
    });
  };

  const handleClear = () => {
    setPassword("");
    setResult(null);
    setError("");
  };

  return (
    <main className="flex min-h-[calc(100vh-66px)] items-start justify-center bg-slate-100 px-5 py-[58px]">
      <div className="w-full max-w-[415px] overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-[0_2px_5px_rgba(15,23,42,0.12)]">
        <div className="bg-[#4f3df5] px-6 py-6 text-white">
          <h1 className="text-[21px] font-bold">Password Strength Checker</h1>

          <p className="mt-1 text-sm text-white/90">Activity 3</p>
        </div>

        <div className="p-6">
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="h-[43px] w-full rounded-lg border border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={handleCheck}
              className="h-11 rounded-lg bg-[#4f3df5] text-sm font-semibold text-white transition hover:bg-[#4338ca]"
            >
              Check Password
            </button>

            <button
              onClick={handleClear}
              className="h-11 rounded-lg bg-slate-100 text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
            >
              Clear
            </button>
          </div>

          {error && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-5 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <h2 className="text-sm font-bold text-indigo-900">
                Password Status
              </h2>

              <p className="mt-2 text-sm text-slate-700">{result.strength}</p>

              <p className="mt-1 text-xs text-slate-600">{result.message}</p>

              <div className="mt-4">
                <div className="mb-2 flex justify-between text-[11px] text-slate-500">
                  <span>Weak</span>
                  <span>Medium</span>
                  <span>Strong</span>
                </div>

                <div className="flex gap-1.5">
                  <div
                    className={`h-2 flex-1 rounded-full ${
                      result.level >= 1 ? "bg-red-400" : "bg-slate-200"
                    }`}
                  />

                  <div
                    className={`h-2 flex-1 rounded-full ${
                      result.level >= 2 ? "bg-yellow-400" : "bg-slate-200"
                    }`}
                  />

                  <div
                    className={`h-2 flex-1 rounded-full ${
                      result.level >= 3 ? "bg-green-500" : "bg-slate-200"
                    }`}
                  />
                </div>

                <p className="mt-2 text-center text-xs text-slate-500">
                  Password length: {result.length}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default PasswordChecker;
