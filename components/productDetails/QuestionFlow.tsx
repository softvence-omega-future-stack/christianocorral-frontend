"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type QuestionFlowProps = {
  product: {
    id: string;
    category?: string;
    brand?: string;
  };
};

export default function QuestionFlow({ product }: QuestionFlowProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({
    powerUp: "",
    condition: "",
    carrier: "",
    capacity: "",
  });

  const handleAnswer = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleContinue = () => {
    const queryParams = new URLSearchParams(answers).toString();
    if (product?.category === "cellphone" && product.brand) {
      router.push(
        `/category/cellphone/${product.brand.toLowerCase()}/${
          product.id
        }/given-price?${queryParams}`
      );
    } else {
      router.push(
        `/category/${product.category}/${product.id}/given-price?${queryParams}`
      );
    }
  };

  const showQuestion2 = answers.powerUp !== "";
  const showQuestion3 = showQuestion2 && answers.condition !== "";
  const showQuestion4 = showQuestion3 && answers.carrier !== "";

  return (
    <div>
    <div className="mt-8 space-y-8 max-w-3xl">
      {/* Question 1 */}
      <div>
        <p className="text-base sm:text-lg font-semibold mb-4">
          1. Does your device power up and is accessible?
        </p>
        <div className="flex gap-4">
          {["yes", "no"].map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer("powerUp", option)}
              className={`flex flex-col items-center justify-center w-[50%] sm:w-[30%] md:w-[22%] lg:w-[20%] px-6 py-5 rounded-lg border-2 transition-all ${
                answers.powerUp === option
                  ? "bg-[#0F3290] border-blue-500 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              <span className="font-semibold mb-2 capitalize">{option}</span>
              <span className="text-xs text-center leading-snug">
                {option === "yes"
                  ? "Switches on and functions 100% as intended."
                  : "Does not switch on and not fully functional."}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Question 2 */}
      {showQuestion2 && (
        <div>
          <p className="text-base sm:text-lg font-semibold mb-4">
            2. How would you describe the phone’s condition?
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {["Sealed", "Flawless", "Very Good", "Good", "Fair", "Broken"].map(
              (cond) => (
                <button
                  key={cond}
                  onClick={() => handleAnswer("condition", cond)}
                  className={`flex-1 min-w-[120px] px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    answers.condition === cond
                      ? "bg-[#0F3290] border-blue-500 text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {cond}
                </button>
              )
            )}
          </div>

          {/* Info box */}
          {answers.condition && (
            <div className="text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
              {answers.condition === "Sealed" && (
                <>
                  <p className="font-semibold">
                    DEVICE IS UNOPENED AND SEALED IN ORIGINAL RETAIL PACKAGING.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Be sealed in original manufacturer packaging</li>
                    <li>Not powered on or activated</li>
                    <li>No third-party tape or damage</li>
                    <li>Free of financial obligations</li>
                  </ul>
                </>
              )}

              {answers.condition === "Flawless" && (
                <>
                  <p className="font-semibold">
                    DEVICE IS IN FLAWLESS CONDITION.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>No scratches or dents</li>
                    <li>All features work perfectly</li>
                    <li>Battery health above 85%</li>
                    <li>Original accessories included</li>
                  </ul>
                </>
              )}

              {answers.condition === "Very Good" && (
                <>
                  <p className="font-semibold">
                    DEVICE IS IN VERY GOOD CONDITION.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Minimal signs of wear</li>
                    <li>Battery above 80%</li>
                    <li>Fully functional</li>
                  </ul>
                </>
              )}

              {answers.condition === "Good" && (
                <>
                  <p className="font-semibold">DEVICE IS IN GOOD CONDITION.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Light scratches or scuffs</li>
                    <li>Battery above 75%</li>
                    <li>All features working</li>
                  </ul>
                </>
              )}

              {answers.condition === "Fair" && (
                <>
                  <p className="font-semibold">DEVICE IS IN FAIR CONDITION.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Moderate scratches or dents</li>
                    <li>Fully functional screen</li>
                    <li>No cracks</li>
                  </ul>
                </>
              )}

              {answers.condition === "Broken" && (
                <>
                  <p className="font-semibold">DEVICE IS BROKEN.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Cracked screen or back glass</li>
                    <li>Non-functional features</li>
                    <li>Battery or hardware issues</li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* Question 3 */}
      {showQuestion3 && (
  <div>
    <p className="text-base sm:text-lg font-semibold mb-4">
      3. Select Carrier
    </p>

    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
      {[
        {
          name: "AT&T",
          logo: "/products/questions/atnt.png", // 🔹 replace with your actual image path
        },
        {
          name: "Verizon",
          logo: "/products/questions/verizon.png",
        },
        {
          name: "T-Mobile",
          logo: "/products/questions/tmobile.png",
        },
        {
          name: "Other Carrier",
          logo: "/products/questions/other.jpeg",
        },
      ].map((carrier) => (
        <button
          key={carrier.name}
          onClick={() => handleAnswer("carrier", carrier.name)}
          className={`flex flex-col items-center justify-center gap-2 flex-1 min-w-[140px] max-w-[160px] px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
            answers.carrier === carrier.name
              ? " border-blue-500 text-white shadow-md"
              : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
          }`}
        >
          <Image
            src={carrier.logo}
            alt={carrier.name}
            className="w-10 h-10 sm:w-20 sm:h-20 object-contain"
            width={80}
            height={80}
          />
          {/* <span className="mt-1">{carrier.name}</span> */}
        </button>
      ))}
    </div>
  </div>
)}


      {/* Question 4 */}
      {showQuestion4 && (
        <div>
          <p className="text-base sm:text-lg font-semibold mb-4">
            4. Select Capacity
          </p>
          <div className="flex flex-wrap gap-3">
            {["256GB", "512GB", "1TB", "2TB"].map((cap) => (
              <button
                key={cap}
                onClick={() => handleAnswer("capacity", cap)}
                className={`flex-1 min-w-[120px] px-6 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  answers.capacity === cap
                    ? "bg-[#0F3290] border-blue-500 text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {cap}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
    </div>
      {showQuestion4 && answers.capacity !== "" && (
        <div className="flex justify-center pt-6">
          <button
            onClick={handleContinue}
            className="w-auto px-8 py-3 bg-[#0F3290] border border-blue-500 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-800 transition-colors"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
