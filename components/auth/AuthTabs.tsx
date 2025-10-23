"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={() => setActiveTab("login")}
          className={`text-lg font-semibold ${
            activeTab === "login" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`text-lg font-semibold ${
            activeTab === "register" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          Register
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
