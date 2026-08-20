import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-[calc(100vh-66px)] bg-slate-100 px-5 pb-20">
      <section className="mx-auto max-w-[1100px] pt-[57px] text-center">
        <h1 className="text-[42px] font-bold leading-tight tracking-[-1px] text-slate-900">
          React Activity Portal
        </h1>

        <p className="mx-auto mt-3 max-w-[700px] text-[16px] leading-6 text-slate-500">
          Five interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </section>

      <section className="mx-auto mt-[43px] grid max-w-[1100px] grid-cols-1 gap-[21px] md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[15px] border border-slate-200 bg-white p-[21px] shadow-[0_2px_4px_rgba(15,23,42,0.08)]">
          <div className="mb-[17px] flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
            1
          </div>

          <h2 className="mb-2 text-[16px] font-semibold text-slate-900">
            Login Authentication
          </h2>

          <p className="min-h-[43px] text-[13px] leading-5 text-slate-500">
            Validate a username and password against sample credentials and
            manage login/logout state.
          </p>

          <Link
            to="/activity1"
            className="mt-[14px] flex h-10 w-full items-center justify-center rounded-lg bg-[#4f3df5] text-[14px] font-semibold text-white transition hover:bg-[#4338ca]"
          >
            Open Activity
          </Link>
        </div>

        <div className="rounded-[15px] border border-slate-200 bg-white p-[21px] shadow-[0_2px_4px_rgba(15,23,42,0.08)]">
          <div className="mb-[17px] flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
            2
          </div>

          <h2 className="mb-2 text-[16px] font-semibold text-slate-900">
            Student Grade Evaluation
          </h2>

          <p className="min-h-[43px] text-[13px] leading-5 text-slate-500">
            Enter a student's score and get an automatic remark based on grade
            ranges.
          </p>

          <Link
            to="/activity2"
            className="mt-[14px] flex h-10 w-full items-center justify-center rounded-lg bg-[#4f3df5] text-[14px] font-semibold text-white transition hover:bg-[#4338ca]"
          >
            Open Activity
          </Link>
        </div>

        <div className="rounded-[15px] border border-slate-200 bg-white p-[21px] shadow-[0_2px_4px_rgba(15,23,42,0.08)]">
          <div className="mb-[17px] flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
            3
          </div>

          <h2 className="mb-2 text-[16px] font-semibold text-slate-900">
            Password Strength Checker
          </h2>

          <p className="min-h-[43px] text-[13px] leading-5 text-slate-500">
            Check password length and receive live feedback on how strong it is.
          </p>

          <Link
            to="/activity3"
            className="mt-[14px] flex h-10 w-full items-center justify-center rounded-lg bg-[#4f3df5] text-[14px] font-semibold text-white transition hover:bg-[#4338ca]"
          >
            Open Activity
          </Link>
        </div>

        <div className="rounded-[15px] border border-slate-200 bg-white p-[21px] shadow-[0_2px_4px_rgba(15,23,42,0.08)]">
          <div className="mb-[17px] flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
            4
          </div>

          <h2 className="mb-2 text-[16px] font-semibold text-slate-900">
            Electricity Bill Calculator
          </h2>

          <p className="min-h-[43px] text-[13px] leading-5 text-slate-500">
            Calculate a customer's electricity bill based on kWh consumption and
            tiered rates.
          </p>

          <Link
            to="/activity4"
            className="mt-[14px] flex h-10 w-full items-center justify-center rounded-lg bg-[#4f3df5] text-[14px] font-semibold text-white transition hover:bg-[#4338ca]"
          >
            Open Activity
          </Link>
        </div>

        <div className="rounded-[15px] border border-slate-200 bg-white p-[21px] shadow-[0_2px_4px_rgba(15,23,42,0.08)]">
          <div className="mb-[17px] flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-700">
            5
          </div>

          <h2 className="mb-2 text-[16px] font-semibold text-slate-900">
            Employee Attendance Checker
          </h2>

          <p className="min-h-[43px] text-[13px] leading-5 text-slate-500">
            Check an employee's time-in and determine whether they are on time,
            late, or very late.
          </p>

          <Link
            to="/activity5"
            className="mt-[14px] flex h-10 w-full items-center justify-center rounded-lg bg-[#4f3df5] text-[14px] font-semibold text-white transition hover:bg-[#4338ca]"
          >
            Open Activity
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
