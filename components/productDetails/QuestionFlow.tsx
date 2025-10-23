// components/productDetails/QuestionFlow.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/data/products";

type QuestionFlowProps = {
  product: Product;
};

export default function QuestionFlow({ product }: QuestionFlowProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const handleContinue = () => {
    router.push(`/${product.category}/${product.id}/given-price`);
  };

  return (
    <div className="mt-10 space-y-6">
      {/* Step 1 */}
      {step === 1 && (
        <div>
          <p className="font-medium">Is your device working?</p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => handleAnswer("working", "yes")}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("working", "no")}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && answers.working === "yes" && (
        <div>
          <p className="font-medium">Select your device condition:</p>
          <div className="flex gap-4 mt-2">
            {["Mint", "Good", "Fair"].map((cond) => (
              <button
                key={cond}
                onClick={() => handleAnswer("condition", cond)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                {cond}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && answers.working === "no" && (
        <div>
          <p className="font-medium">Select issue type:</p>
          <div className="flex gap-4 mt-2">
            {["Screen", "Battery", "Other"].map((issue) => (
              <button
                key={issue}
                onClick={() => handleAnswer("issue", issue)}
                className="px-4 py-2 bg-yellow-500 text-white rounded"
              >
                {issue}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continue button */}
      {step > 2 && (
        <div>
          <button
            onClick={handleContinue}
            className="px-6 py-3 bg-black text-white rounded mt-4"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
