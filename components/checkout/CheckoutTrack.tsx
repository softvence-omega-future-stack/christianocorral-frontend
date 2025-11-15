// components/checkout/CheckoutTrack.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export type CheckoutTrackProduct = {
  id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
};

type CheckoutTrackProps = {
  /** The product that was just traded‑in */
  product: CheckoutTrackProduct;

  /** Optional: email that was entered in the checkout flow (defaults to a placeholder) */
  email?: string;

  /** Optional: customer name (defaults to a placeholder) */
  customerName?: string;

  /** Optional: shipping address lines (defaults to placeholders) */
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;

  /** Optional: phone number (defaults to a placeholder) */
  phone?: string;

  /** Optional: payment method shown in the summary (defaults to “PayPal”) */
  paymentMethod?: string;

  /** Optional: insurance fee (defaults to “$4.00”) */
  insuranceFee?: string;
};

export default function CheckoutTrack({
  product,
  email = "example@email.com",
  customerName = "Hamza Richard",
  addressLine1 = "75 Beechwood Avenue",
  addressLine2 = "FL 33865",
  addressLine3 = "",
  phone = "(612) 459-789",
  paymentMethod = "PayPal",
  insuranceFee = "$4.00",
}: CheckoutTrackProps) {
  // Random trade‑in ID – generated once per mount
  const [tradeInId] = useState<string>(() =>
    `#${Math.floor(100000 + Math.random() * 900000)}`
  );

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ────── Thank You Header ────── */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You</h1>
          <p className="text-sm text-gray-600">
            Your Trade-in{" "}
            <span className="text-blue-600 font-semibold">{tradeInId}</span>
          </p>
          <p className="text-xs text-gray-600 mt-4">
            A copy of this information has been sent to:{" "}
            <a href={`mailto:${email}`} className="text-blue-600">
              {email}
            </a>
          </p>
        </div>

        {/* ────── What’s next? ────── */}
        <div className="mb-8">
          <h2 className="text-center text-lg font-semibold text-gray-900 mb-6">
            What&apos;s next? Four easy steps and you&apos;re done!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-2">1</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Erase Your Device(s)
              </p>
              <p className="text-xs text-gray-600">
                Turn off the &quot;Find my Phone&quot; feature on iPhones or
                &quot;Android Device Manager&quot; on Android devices.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-2">2</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Print Shipping Label
              </p>
              <p className="text-xs text-gray-600">Attach Free Shipping Label</p>
              <div className="mt-2 inline-flex items-center justify-center px-3 py-1 bg-yellow-500 rounded-full">
                <span className="text-xs font-semibold text-white">USPS</span>
              </div>
              <p className="text-xs text-blue-600 mt-1 cursor-pointer">
                Ship within 14 days
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-2">3</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Pack and Ship
              </p>
              <p className="text-xs text-gray-600">
                All fun to properly package your device using bubble wrap or
                packing material
              </p>
              <p className="text-xs text-blue-600 mt-1 cursor-pointer">
                Ship within 14 days
              </p>
            </div>
          </div>
        </div>

        {/* ────── Main Grid ────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ────── LEFT ────── */}
          <div className="space-y-6">
            {/* Trade‑In Summary */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-900 text-white px-4 py-3">
                <h3 className="font-semibold text-sm">Trade-In Summary</h3>
              </div>

              <div className="p-6">
                <div className="flex gap-4 mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-cover rounded"
                    priority
                    unoptimized
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {product.name}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">
                      ${product.price}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between pb-3 border-b">
                    <span className="font-semibold text-gray-900">
                      Sealed · AT&T · 256GB
                    </span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-xs">
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Answered</span>
                    <span className="font-medium">Yes</span>
                  </div>

                  <div className="py-2">
                    <p className="text-gray-600 mb-1">
                      How would you describe the phone&apos;s condition?
                    </p>
                    <p className="font-medium">Sealed</p>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">What Carrier</span>
                    <span className="font-medium">AT&T</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">
                      How much storage does your device have?
                    </span>
                    <span className="font-medium">256GB</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">
                      Do you agree to the Buyback Policy?
                    </span>
                    <span className="font-medium">I Accept</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Kit */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-900 text-white px-4 py-3">
                <h3 className="font-semibold text-sm">Shipping Kit</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-700 mb-4">
                  Don&apos;t have a box, packaging material or printer? Request
                  a{" "}
                  <a href="#" className="text-blue-600 underline">
                    shipping kit
                  </a>
                  .
                </p>
                <button className="px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800">
                  Send Quantity
                </button>
              </div>
            </div>
          </div>

          {/* ────── RIGHT ────── */}
          <div className="space-y-6">
            {/* Trade‑In Details */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-900 text-white px-4 py-3">
                <h3 className="font-semibold text-sm">Trade-In Details</h3>
              </div>
              <div className="p-6 space-y-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">
                    October 16th, 2025, 04:38 AM
                  </p>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium">{paymentMethod}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Item Count</span>
                  <span className="font-medium">1</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Insurance Fee</span>
                  <span className="font-medium">{insuranceFee}</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Trade-in Total</span>
                  <span className="font-bold text-green-600 text-lg">
                    ${product.price}
                  </span>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-xs text-gray-700">
                    <strong>Pending Shipment:</strong>
                    <br />
                    We&apos;re waiting for this trade-in to be shipped in
                    Verify.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-900 text-white px-4 py-3">
                <h3 className="font-semibold text-sm">Trade-In Details</h3>
              </div>
              <div className="p-6 space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">{customerName}</p>
                </div>

                <div>
                  <p className="text-gray-600 mb-1">{addressLine1}</p>
                </div>

                <div>
                  <p className="text-gray-600 mb-1">{addressLine2}</p>
                </div>

                {addressLine3 && (
                  <div>
                    <p className="text-gray-600 mb-1">{addressLine3}</p>
                  </div>
                )}

                <div>
                  <p className="text-gray-600 mb-1">Phone: {phone}</p>
                </div>

                <div>
                  <p className="text-gray-600">
                    Email:{" "}
                    <a href={`mailto:${email}`} className="text-blue-600">
                      {email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ────── Print Button ────── */}
        <div className="mt-8 text-center print:hidden">
          <button
            onClick={handlePrint}
            className="px-8 py-3 bg-blue-900 text-white text-sm font-semibold rounded hover:bg-blue-800 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                clipRule="evenodd"
              />
            </svg>
            Download / Print Checkout Information
          </button>
        </div>

        {/* ────── Print Styles ────── */}
        <style jsx>{`
          @media print {
            body {
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
            .print\\:hidden {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}