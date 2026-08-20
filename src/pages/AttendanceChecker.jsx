import { useState } from "react";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheckAttendance = () => {
    setError("");
    setResult(null);

    if (employeeName.trim() === "") {
      setError("Please enter the employee name.");
      return;
    }

    if (timeIn === "") {
      setError("Please enter the time-in.");
      return;
    }

    const time = Number(timeIn);

    if (time < 0 || time > 24) {
      setError("Invalid time-in.");
      return;
    }

    let status;
    let message;

    if (time <= 7) {
      status = "On Time";
      message = "Status: On Time – Good job!";
    } else if (time <= 8) {
      status = "Late";
      message = "Status: Late – Please be on time tomorrow.";
    } else {
      status = "Very Late";
      message = "Status: Very Late – Report to your supervisor.";
    }

    setResult({
      employeeName,
      timeIn: time,
      status,
      message,
    });
  };

  const handleReset = () => {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
    setError("");
  };

  return (
    <main className="flex min-h-[calc(100vh-66px)] items-start justify-center bg-slate-100 px-5 py-[58px]">
      <div className="w-full max-w-[415px] overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-[0_2px_5px_rgba(15,23,42,0.12)]">
        <div className="bg-[#4f3df5] px-6 py-6 text-white">
          <h1 className="text-[21px] font-bold">Employee Attendance Checker</h1>

          <p className="mt-1 text-sm text-white/90">Activity 5</p>
        </div>

        <div className="p-6">
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
              Employee Name
            </label>

            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter employee name"
              className="h-[43px] w-full rounded-lg border border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
              Time In
            </label>

            <input
              type="number"
              min="0"
              max="24"
              step="0.1"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              placeholder="e.g. 8.5 = 8:30 AM"
              className="h-[43px] w-full rounded-lg border border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={handleCheckAttendance}
              className="h-11 rounded-lg bg-[#4f3df5] text-sm font-semibold text-white transition hover:bg-[#4338ca]"
            >
              Check Attendance
            </button>

            <button
              onClick={handleReset}
              className="h-11 rounded-lg bg-slate-100 text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
            >
              Reset
            </button>
          </div>

          {error && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-5 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <h2 className="mb-3 text-sm font-bold text-indigo-900">
                Attendance Result
              </h2>

              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Employee Name:</span>{" "}
                  {result.employeeName}
                </p>

                <p>
                  <span className="font-semibold">Time In:</span>{" "}
                  {result.timeIn}
                </p>

                <p>
                  <span className="font-semibold">Attendance Status:</span>{" "}
                  {result.status}
                </p>

                <p className="pt-1 font-medium">{result.message}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default AttendanceChecker;
