import { useState } from "react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (customerName.trim() === "") {
      setError("Please enter the customer name.");
      return;
    }

    if (consumption === "") {
      setError("Please enter the electricity consumption.");
      return;
    }

    const kwh = Number(consumption);

    if (kwh < 0) {
      setError("Invalid consumption.");
      return;
    }

    let rate;

    if (kwh <= 100) {
      rate = 10;
    } else if (kwh <= 200) {
      rate = 12;
    } else if (kwh <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const totalBill = kwh * rate;

    let usageStatus;

    if (totalBill >= 5000) {
      usageStatus = "High Electricity Usage";
    } else {
      usageStatus = "Normal Electricity Usage";
    }

    setResult({
      customerName,
      consumption: kwh,
      rate,
      totalBill,
      usageStatus,
    });
  };

  const handleClear = () => {
    setCustomerName("");
    setConsumption("");
    setResult(null);
    setError("");
  };

  return (
    <main className="flex min-h-[calc(100vh-66px)] items-start justify-center bg-slate-100 px-5 py-[58px]">
      <div className="w-full max-w-[415px] overflow-hidden rounded-[15px] border border-slate-200 bg-white shadow-[0_2px_5px_rgba(15,23,42,0.12)]">
        <div className="bg-[#4f3df5] px-6 py-6 text-white">
          <h1 className="text-[21px] font-bold">Electricity Bill Calculator</h1>

          <p className="mt-1 text-sm text-white/90">Activity 4</p>
        </div>

        <div className="p-6">
          <div>
            <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
              Customer Name
            </label>

            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
              className="h-[43px] w-full rounded-lg border border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-[13px] font-medium text-slate-900">
              Consumption (kWh)
            </label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              placeholder="Enter consumption"
              className="h-[43px] w-full rounded-lg border border-slate-300 px-4 text-sm outline-none placeholder:text-slate-400 focus:border-[#4f3df5] focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={handleCalculate}
              className="h-11 rounded-lg bg-[#4f3df5] text-sm font-semibold text-white transition hover:bg-[#4338ca]"
            >
              Calculate Bill
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
              <h2 className="mb-3 text-sm font-bold text-indigo-900">
                Bill Result
              </h2>

              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Customer Name:</span>{" "}
                  {result.customerName}
                </p>

                <p>
                  <span className="font-semibold">Consumption:</span>{" "}
                  {result.consumption} kWh
                </p>

                <p>
                  <span className="font-semibold">Rate Applied:</span> ₱
                  {result.rate.toFixed(2)} per kWh
                </p>

                <p>
                  <span className="font-semibold">Total Bill:</span> ₱
                  {result.totalBill.toFixed(2)}
                </p>

                <p>
                  <span className="font-semibold">Usage Status:</span>{" "}
                  {result.usageStatus}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ElectricityBill;
