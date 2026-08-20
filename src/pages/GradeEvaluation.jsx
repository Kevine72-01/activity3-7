import { useState } from "react";

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleEvaluate = (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    if (studentName.trim() === "") {
      setError("Please enter the student name.");
      return;
    }

    if (score === "") {
      setError("Please enter a score.");
      return;
    }

    const numericScore = Number(score);

    if (numericScore < 0 || numericScore > 100) {
      setError("Invalid score");
      return;
    }

    let remark;

    if (numericScore >= 90) {
      remark = "Excellent";
    } else if (numericScore >= 85) {
      remark = "Very Good";
    } else if (numericScore >= 80) {
      remark = "Good";
    } else if (numericScore >= 75) {
      remark = "Passed";
    } else {
      remark = "Failed";
    }

    setResult({
      name: studentName,
      score: numericScore,
      remark,
    });
  };

  const handleClear = () => {
    setStudentName("");
    setScore("");
    setResult(null);
    setError("");
  };

  return (
    <main className="flex min-h-[calc(100vh-66px)] items-start justify-center bg-slate-100 px-5 py-[58px]">
      <div className="w-full max-w-[415px] overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-[0_2px_5px_rgba(15,23,42,0.12)]">
        <div className="bg-[#4f3df5] px-6 py-6 text-white">
          <h1 className="text-[21px] font-bold">Student Grade Evaluation</h1>

          <p className="mt-1 text-sm text-white/90">Activity 2</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleEvaluate}>
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
                Student Name
              </label>

              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
                className="h-[43px] w-full rounded-lg border border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
                Score
              </label>

              <input
                type="number"
                min="0"
                max="100"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Enter score (0-100)"
                className="h-[43px] w-full rounded-lg border border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="submit"
                className="h-11 rounded-lg bg-[#4f3df5] text-sm font-semibold text-white shadow-sm transition hover:bg-[#4338ca]"
              >
                Evaluate
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="h-11 rounded-lg bg-slate-100 text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
              >
                Clear
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-5 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <h2 className="mb-3 text-sm font-bold text-indigo-900">Result</h2>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Student Name:</span>{" "}
                  {result.name}
                </p>

                <p>
                  <span className="font-semibold">Score:</span> {result.score}
                </p>

                <p>
                  <span className="font-semibold">Remarks:</span>{" "}
                  {result.remark}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default GradeEvaluation;
