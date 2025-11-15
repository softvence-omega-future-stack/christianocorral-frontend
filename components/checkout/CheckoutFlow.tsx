// components/checkout/CheckoutFlow.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type CheckoutProduct = {
  id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
};

type CheckoutFlowProps = {
  product: CheckoutProduct;
  successPath: string;
  placeholderImage?: string;
};

type AuthMode = "guest" | "login" | "signup";

export default function CheckoutFlow({
  product,
  successPath,
  placeholderImage = "/placeholder.png",
}: CheckoutFlowProps) {
  const router = useRouter();

  // ────── UI state ──────
  const [guestEmail, setGuestEmail] = useState("");
  const [showForms, setShowForms] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedProcessing, setSelectedProcessing] = useState("standard");
  const [selectedShipping, setSelectedShipping] = useState("own-box");
  const [selectedInsurance, setSelectedInsurance] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("guest");
  const [emailOffers, setEmailOffers] = useState(false);
  const [textUpdates, setTextUpdates] = useState(false);

  // ────── Auth state (login / signup success) ──────
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null); // null = not logged in

  // ────── Form values for login / signup ──────
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");

  // ────── Email validation ──────
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ────── Handlers ──────
  const handleContinueAsGuest = () => {
    if (!isValidEmail(guestEmail)) {
      alert("Please enter a valid email address (example: abc@gmail.com)");
      return;
    }
    setShowForms(true);
  };

  const handleLogin = () => {
    if (!isValidEmail(loginEmail) || !loginPassword) {
      alert("Please fill in email and password.");
      return;
    }
    // Simulate login success
    setLoggedInEmail(loginEmail);
    setShowForms(true);
  };

  const handleSignup = () => {
    if (
      !signupName ||
      !isValidEmail(signupEmail) ||
      signupPassword !== signupConfirm
    ) {
      alert("Please fill all fields correctly and ensure passwords match.");
      return;
    }
    // Simulate signup success
    setLoggedInEmail(signupEmail);
    setShowForms(true);
  };

  const handleCheckout = () => {
    if (termsAccepted) router.push(successPath);
  };

  // ────── Render ──────
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ────── LEFT – FORMS ────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* ACCOUNT INFORMATION */}
            <div className="">
              <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-300">
                Account Information
              </h2>

              <div className="bg-[#F4F6F8] border border-gray-300 p-3 md:p-6 rounded-lg">
                {/* If already logged in / signed up → show banner */}
                {loggedInEmail ? (
                  <div className="bg-[#F4F6F8] p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      You’re currently logged in as{" "}
                      <span className="font-medium">{loggedInEmail}</span>
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Auth mode tabs */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
                      {(["guest", "login", "signup"] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setAuthMode(mode)}
                          className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors text-nowrap border-2 bg-white text-black
                            ${
                              authMode === mode
                                ? " border-blue-900"
                                : "hover:border-gray-400 border-gray-300"
                            }`}
                        >
                          {mode === "guest" && "Guest"}
                          {mode === "login" && "Log in"}
                          {mode === "signup" && "Create Account"}
                        </button>
                      ))}
                    </div>

                    {/* GUEST */}
                    {authMode === "guest" && (
                      <>
                        <p className="text-sm text-gray-700 mb-4">
                          Submit your trade‑in as a guest:
                        </p>

                        {!showForms ? (
                          <>
                            <input
                              type="email"
                              value={guestEmail}
                              onChange={(e) => setGuestEmail(e.target.value)}
                              placeholder="example@gmail.com"
                              className="w-full px-4 py-2 border border-gray-300 rounded mb-4 text-sm"
                            />
                            <button
                              onClick={handleContinueAsGuest}
                              className="px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800"
                            >
                              Continue as a guest
                            </button>
                          </>
                        ) : (
                          <p className="text-sm text-gray-700">{guestEmail}</p>
                        )}
                      </>
                    )}

                    {/* LOG IN */}
                    {authMode === "login" && (
                      <form
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <input
                          type="email"
                          placeholder="Email"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                        <button
                          type="button"
                          onClick={handleLogin}
                          className="w-full py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800"
                        >
                          Log in
                        </button>
                        <p className="text-xs text-center text-blue-600 cursor-pointer">
                          Forgot password?
                        </p>
                      </form>
                    )}

                    {/* CREATE ACCOUNT */}
                    {authMode === "signup" && (
                      <form
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          value={signupConfirm}
                          onChange={(e) => setSignupConfirm(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                        />
                        <button
                          type="button"
                          onClick={handleSignup}
                          className="w-full py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800"
                        >
                          Create Account
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* ────── ALL OTHER FORMS (shown after email) ────── */}
            {showForms && (
              <>
                {/* Form of Payment */}
                <div className="">
                  <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-300">
                    Form of Payment
                  </h2>
                  <div className="bg-[#F4F6F8] border border-gray-300 p-3 md:p-6 rounded-lg">
                    <p className="text-sm text-gray-700 mb-4">
                      How would you like to be paid?
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                      {[
                        "Check",
                        "PayPal",
                        "eCheck",
                        "Virtual Mastercard",
                        "Gift Card",
                      ].map((method) => (
                        <button
                          key={method}
                          onClick={() => setSelectedPayment(method)}
                          className={`px-2 py-2 text-xs md:text-sm font-medium rounded-lg border-2 flex items-center justify-center gap-2 text-nowrap ${
                            selectedPayment === method
                              ? "bg-blue-900 border-blue-900 text-white"
                              : "bg-white border-[#E7EBF4] text-gray-700 hover:border-blue-900"
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#E7EBF4] border border-blue-200 rounded p-3 mb-3">
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Note:</strong> Your check will be issued by the
                        name of company listed in the shipping address provided
                        below.
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        <strong>Delivery:</strong> Your payout will arrive by
                        mail after trade-in approval.
                      </p>
                      <p className="text-xs text-[#FF4842]">
                        To reduce fraud, we only accept PayPal when trading in
                        new items.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="">
                  <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-300">
                    Shipping Address
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F4F6F8] border border-gray-300 p-3 md:p-6 rounded-lg">
                    <input
                      type="text"
                      placeholder="Full Name or Company Name"
                      className="px-4 py-2 border border-gray-300 rounded text-sm bg-white text-black"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="px-4 py-2 border border-gray-300 rounded text-sm bg-white text-black"
                    />
                    <input
                      type="text"
                      placeholder="Address (Street)"
                      className="md:col-span-2 px-4 py-2 border border-gray-300 rounded text-sm bg-white text-black"
                    />
                  </div>
                </div>

                {/* Get Paid Faster */}
                <div className="">
                  <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-300">
                    Get Paid Faster
                  </h2>
                  <div className="bg-[#F4F6F8] border border-gray-300 p-3 md:p-6 rounded-lg">
                    <p className="text-sm text-gray-700 mb-4">
                      Need cash faster? Choose one of our quicker processing
                      options:
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-700 mb-2">
                          <strong>• Expedited Processing:</strong> We guarantee
                          to inspect your trade‑in within 1 business day of its
                          arrival followed by swift payment processing.
                        </p>
                        <p className="text-xs text-gray-700">
                          <strong>• Lightning Fast Processing:</strong> | For an
                          even quicker turnaround, select this option. We
                          promise to inspect your device within 4 business hours
                          of its arrival, process a 2‑day shipping label,
                          followed by swift payment processing. Guaranteed!
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {/* Standard */}
                      <label
                        className={`flex items-center justify-between gap-3 cursor-pointer rounded-lg px-4 py-2 transition-colors w-full sm:w-[50%]
        ${
          selectedProcessing === "standard"
            ? "bg-blue-900 text-white"
            : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
        }`}
                      >
                        <div className="flex items-center gap-3">
                          <label className="relative flex items-center">
                            <input
                              type="radio"
                              name="processing"
                              value="standard"
                              checked={selectedProcessing === "standard"}
                              onChange={(e) =>
                                setSelectedProcessing(e.target.value)
                              }
                              className="peer w-4 h-4 text-blue-900 focus:ring-blue-900 appearance-none border border-gray-400 rounded-full checked:bg-blue-900 checked:border-blue-900"
                            />

                            {/* Tick Icon */}
                            {selectedProcessing === "standard" && (
                              <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 flex items-center justify-center text-white text-[10px] border rounded-full">
                                ✓
                              </span>
                            )}
                          </label>

                          <span className="text-sm font-medium">
                            Standard Processing
                          </span>
                        </div>
                      </label>

                      {/* Expedited */}
                      <label
                        className={`flex items-center justify-between gap-3 cursor-pointer rounded-lg px-4 py-2 transition-colors w-full sm:w-[50%]
        ${
          selectedProcessing === "expedited"
            ? "bg-blue-900 text-white"
            : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
        }`}
                      >
                        <div className="flex items-center gap-3">
                          <label className="relative flex items-center">
                            <input
                              type="radio"
                              name="processing"
                              value="expedited"
                              checked={selectedProcessing === "expedited"}
                              onChange={(e) =>
                                setSelectedProcessing(e.target.value)
                              }
                              className="peer w-4 h-4 text-blue-900 focus:ring-blue-900 appearance-none border border-gray-400 rounded-full checked:bg-blue-900 checked:border-blue-900"
                            />

                            {/* Tick Icon */}
                            {selectedProcessing === "expedited" && (
                              <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 flex items-center justify-center text-white text-[10px] border rounded-full">
                                ✓
                              </span>
                            )}
                          </label>

                          <span className="text-sm font-medium">
                            Expedited Processing
                          </span>
                        </div>

                        <span className="text-sm font-medium">
                          {selectedProcessing === "expedited" ? (
                            <span className="text-white">$22.00</span>
                          ) : (
                            <span className="text-gray-700">$22.00</span>
                          )}
                        </span>
                      </label>

                      {/* Lightning Fast */}
                      <label
                        className={`flex items-center justify-between gap-3 cursor-pointer rounded-lg px-4 py-2 transition-colors w-full sm:w-[50%]
        ${
          selectedProcessing === "lightning"
            ? "bg-blue-900 text-white"
            : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
        }`}
                      >
                        <div className="flex items-center gap-3">
                          <label className="relative flex items-center">
                            <input
                              type="radio"
                              name="processing"
                              value="lightning"
                              checked={selectedProcessing === "lightning"}
                              onChange={(e) =>
                                setSelectedProcessing(e.target.value)
                              }
                              className="peer w-4 h-4 text-blue-900 focus:ring-blue-900 appearance-none border border-gray-400 rounded-full checked:bg-blue-900 checked:border-blue-900"
                            />

                            {/* Tick Icon */}
                            {selectedProcessing === "lightning" && (
                              <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 flex items-center justify-center text-white text-[10px] border rounded-full">
                                ✓
                              </span>
                            )}
                          </label>

                          <span className="text-sm font-medium">
                            Lightning Fast Processing
                          </span>
                        </div>

                        <span className="text-sm font-medium">
                          {selectedProcessing === "lightning" ? (
                            <span className="text-white">$75.00</span>
                          ) : (
                            <span className="text-gray-700">$75.00</span>
                          )}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Shipping Kit */}
                <div className="">
                  <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-300">
                    Shipping Kit
                  </h2>
                  <div className="bg-[#F4F6F8] border border-gray-300 p-3 md:p-6 rounded-lg">
                    <p className="text-sm text-gray-700 mb-4">
                      Need a box? Request a shipping kit and for a small fee
                      we&apos;ll send you a box, bubble wrap sleeve, prepaid
                      shipping label, and instruction manual. If you don&apos;t
                      need a shipping kit, you&apos;ll just get a free shipping
                      label sent to your email.
                    </p>

                    <div className="space-y-2">
                      {/* Own Box */}
                      <label
                        className={`flex items-center justify-between gap-3 cursor-pointer rounded-lg px-4 py-2 transition-colors w-full sm:w-[50%]
      ${
        selectedShipping === "own-box"
          ? "bg-blue-900 text-white"
          : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
      }
    `}
                      >
                        <div className="flex items-center gap-3">
                          <label className="relative flex items-center">
                            <input
                              type="radio"
                              name="shipping"
                              value="own-box"
                              checked={selectedShipping === "own-box"}
                              onChange={(e) =>
                                setSelectedShipping(e.target.value)
                              }
                              className="peer w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-900 checked:border-blue-900"
                            />

                            {/* Tick Icon */}
                            {selectedShipping === "own-box" && (
                              <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 text-white text-[10px] flex items-center justify-center border rounded-full">
                                ✓
                              </span>
                            )}
                          </label>

                          <span className="text-sm font-medium">
                            I&apos;ll use my own box
                          </span>
                        </div>
                      </label>

                      {/* Kit with UPS Label */}
                      <label
                        className={`flex items-center justify-between gap-3 cursor-pointer rounded-lg px-4 py-2 transition-colors w-full sm:w-[50%]
      ${
        selectedShipping === "kit"
          ? "bg-blue-900 text-white"
          : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
      }
    `}
                      >
                        <div className="flex items-center gap-3">
                          <label className="relative flex items-center">
                            <input
                              type="radio"
                              name="shipping"
                              value="kit"
                              checked={selectedShipping === "kit"}
                              onChange={(e) =>
                                setSelectedShipping(e.target.value)
                              }
                              className="peer w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-900 checked:border-blue-900"
                            />

                            {/* Tick Icon */}
                            {selectedShipping === "kit" && (
                              <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 text-white text-[10px] flex items-center justify-center border rounded-full">
                                ✓
                              </span>
                            )}
                          </label>

                          <span className="text-sm font-medium">
                            Kit with Prepaid UPS Label - $9.00
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Shipping Insurance */}
                <div className="">
                  <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-300">
                    Shipping Insurance
                  </h2>
                  <div className="bg-[#F4F6F8] border border-gray-300 p-3 md:p-6 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                      Up to $0.00 of insurance is included on all packages for
                      free. Purchase additional shipping insurance for just
                      $18.00 to fully insure your trade‑in.
                    </p>

                    <p className="text-xs text-red-600 mb-4">
                      (No insurance has been purchased your total trade‑in
                      needs)
                    </p>

                    <div className="space-y-2 mb-4">
                      {/* Add Insurance */}
                      <label
                        className={`flex items-center justify-between gap-3 cursor-pointer rounded-lg px-4 py-2 transition-colors w-full sm:w-[50%]
                        ${
                          selectedInsurance === "add"
                            ? "bg-blue-900 text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                        }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <label className="relative flex items-center">
                            <input
                              type="radio"
                              name="insurance"
                              value="add"
                              checked={selectedInsurance === "add"}
                              onChange={(e) =>
                                setSelectedInsurance(e.target.value)
                              }
                              className="peer w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-900 checked:border-blue-900"
                            />

                            {/* Tick Icon */}
                            {selectedInsurance === "add" && (
                              <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 text-white text-[10px] flex items-center justify-center border rounded-full">
                                ✓
                              </span>
                            )}
                          </label>

                          <span className="text-sm font-medium">
                            Add Insurance
                          </span>
                        </div>
                      </label>

                      {/* Basic Insurance */}
                      <label
                        className={`flex items-center justify-between gap-3 cursor-pointer rounded-lg px-4 py-2 transition-colors w-full sm:w-[50%]
                            ${
                              selectedInsurance === "basic"
                                ? "bg-blue-900 text-white"
                                : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                            }
                            `}
                      >
                        <div className="flex items-center gap-3">
                          <label className="relative flex items-center">
                            <input
                              type="radio"
                              name="insurance"
                              value="basic"
                              checked={selectedInsurance === "basic"}
                              onChange={(e) =>
                                setSelectedInsurance(e.target.value)
                              }
                              className="peer w-4 h-4 appearance-none border border-gray-400 rounded-full checked:bg-blue-900 checked:border-blue-900"
                            />

                            {/* Tick Icon */}
                            {selectedInsurance === "basic" && (
                              <span className="pointer-events-none absolute left-0 top-0 w-4 h-4 text-white text-[10px] flex items-center justify-center border rounded-full">
                                ✓
                              </span>
                            )}
                          </label>

                          <span className="text-sm font-medium">
                            Basic Insurance Only
                          </span>
                        </div>
                      </label>
                    </div>

                    <p className="text-xs text-gray-600">
                      <strong>Note:</strong> Insurance covering missing shipping
                      or lost or undeliverable or damaged device could be
                      covered. Coverage is only offered for devices that get
                      damaged or lost while on their way to or from us. However,
                      some UPS based tracking and can be used for any reason.
                      Approved.
                    </p>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="">
                  <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-200">
                    Terms & Conditions
                  </h2>
                  <div className="bg-[#F4F6F8] border border-gray-300 p-3 md:p-6 rounded-lg">
                    <p className="text-sm text-gray-700 mb-4 underline underline-offset-4 underline-gray-300">
                      Read our terms and conditions
                    </p>

                    <div className="space-y-2 mb-4">
                      {/* Terms accepted */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <span className="relative">
                          <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                            className="peer w-4 h-4 appearance-none border border-gray-400 rounded-sm checked:bg-blue-900 checked:border-blue-900"
                          />

                          {termsAccepted && (
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-sm">
                              ✓
                            </span>
                          )}
                        </span>

                        <span className="text-sm text-gray-700">
                          I accept the terms and conditions
                        </span>
                      </label>

                      {/* Subscribe to email offers */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <span className="relative">
                          <input
                            type="checkbox"
                            checked={emailOffers}
                            onChange={() => setEmailOffers(!emailOffers)}
                            className="peer w-4 h-4 appearance-none border border-gray-400 rounded-sm checked:bg-blue-900 checked:border-blue-900"
                          />

                          {emailOffers && (
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-sm">
                              ✓
                            </span>
                          )}
                        </span>

                        <span className="text-sm text-gray-700">
                          Subscribe to special email only offers
                        </span>
                      </label>

                      {/* Text updates */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <span className="relative">
                          <input
                            type="checkbox"
                            checked={textUpdates}
                            onChange={() => setTextUpdates(!textUpdates)}
                            className="peer w-4 h-4 appearance-none border border-gray-400 rounded-sm checked:bg-blue-900 checked:border-blue-900"
                          />

                          {textUpdates && (
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-sm">
                              ✓
                            </span>
                          )}
                        </span>

                        <span className="text-sm text-gray-700">
                          Text me updates about my trade-in at{" "}
                          <a href="tel:+15556789100" className="text-blue-600">
                            +1(555) 678 9100
                          </a>
                        </span>
                      </label>
                    </div>

                    <p className="text-xs text-gray-600 mb-4">
                      By checking this box, you consent to receive SMS updates
                      from BuyBackPrima regarding your Trade‑In.
                    </p>

                    <button
                      disabled={!termsAccepted}
                      onClick={handleCheckout}
                      className={`w-full md:w-auto px-8 py-2.5 text-sm font-medium rounded ${
                        termsAccepted
                          ? "bg-blue-900 text-white hover:bg-blue-800"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ────── RIGHT – SUMMARY ────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-30">
              <h2 className="text-[#2F80ED] text-lg font-semibold mb-4 border-b pb-2 border-gray-300">
                Checkout Summary
              </h2>
              <div className="bg-[#F4F6F8] border border-gray-300 p-6 rounded-lg">
                <div className="flex gap-4 mb-4">
                  <Image
                    src={product.image ?? placeholderImage}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-sm text-[#637381]">${product.price}</p>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-[#637381]">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Items</span>
                    <span className="text-[#637381]">1</span>
                  </div>
                  <div className="flex justify-between text-base border-t pt-2 border-gray-300">
                    <span className="text-gray-900">Total Payout</span>
                    <span className="text-[#3BB515]">${product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
