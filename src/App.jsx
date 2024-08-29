import { PriceSection } from "./utils";

export default function App() {
  return (
    <div className="flex items-center justify-center flex-col mx-4 gap-4 m-2 p-2">
      <button className="self-start bg-blue-400 p-2 rounded-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 m-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <PriceSection />
    </div>
  );
}
