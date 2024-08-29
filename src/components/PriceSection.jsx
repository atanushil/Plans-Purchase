import { useState } from "react";

const PlansDetails = {
  Yearly: {
    title: "Annual (Most Popular)",
    features: [
      "Unlimited Copilot questions",
      "Deeper app personalization",
      "Direct community support from PCOS nutritionists & naturopaths",
      "Direct messaging to PCOS nutritionists & naturopaths",
      "15% off PCOS vitamins",
      "Free gifts with vitamin orders",
      "Access to exclusive PCOS education content",
    ],
    price: 95.88,
    currency: "$",
    duration: 12, // Number of months
  },
  Quarterly: {
    title: "Quarterly",
    features: [
      "Unlimited Copilot questions",
      "App personalization",
      "Community support from PCOS nutritionists & naturopaths",
      "10% off PCOS vitamins",
      "Access to PCOS education content",
    ],
    price: 29.97,
    currency: "$",
    duration: 3, // Number of months
  },
  Monthly: {
    title: "Monthly",
    features: [
      "Unlimited Copilot questions",
      "Basic app personalization",
      "Community support from PCOS nutritionists",
      "5% off PCOS vitamins",
      "Access to basic PCOS education content",
    ],
    price: 9.99,
    currency: "$",
    duration: 1, // Number of months
  },
};

const PriceSection = () => {
  const [selected, setSelected] = useState("Yearly");
  const selectedPlan = PlansDetails[selected];
  const perMonthPrice = (selectedPlan.price / selectedPlan.duration).toFixed(2);

  return (
    <div className="w-full mx-4">
      <ul className="flex gap-4 bg-[#f87171] justify-between px-2 py-1.5 rounded-3xl">
        {Object.keys(PlansDetails).map((planKey, i) => (
          <li
            key={i}
            onClick={() => setSelected(planKey)}
            className={`w-full text-center px-2 py-1 cursor-pointer rounded-2xl ${
              selected === planKey ? "bg-[#2563eb] text-white" : "text-black"
            }`}
          >
            {planKey}
          </li>
        ))}
      </ul>

      <div className="bg-slate-50 p-4 rounded-lg shadow-lg mt-4 flex flex-col ">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#f87171] to-[#2563eb] text-white rounded-xl p-2 relative overflow-hidden">
          <div className="flex flex-col pl-4">
            <h2 className="text-2xl font-bold">Premium</h2>
            <h2 className="text-lg font-semibold">{selectedPlan.title}</h2>
          </div>
          <div className="flex flex-col items-end pr-4">
            <p className="text-3xl font-semibold">
              {selectedPlan.currency}
              {selectedPlan.price.toFixed(2)}
            </p>
            {selected !== "Monthly" && (
              <p className="text-sm font-medium">
                {selectedPlan.currency}{perMonthPrice} / months
              </p>
            )}
          </div>
        </div>
        <ul className="list-disc list-inside mt-4">
          {selectedPlan.features.map((feature, i) => (
            <li key={i} className="mb-1 flex gap-2 items-center text-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white rounded-full p-1 bg-pink-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button onClick={()=>alert(`You choose  ${selected} base plan .`)} className="bg-blue-500 py-2 px-4 rounded-full text-white w-fit self-center mt-4">
          Start a trial
        </button>
      </div>
    </div>
  );
};

export default PriceSection;
