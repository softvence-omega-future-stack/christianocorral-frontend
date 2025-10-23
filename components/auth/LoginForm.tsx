"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2 text-center">Welcome Back</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
          required
        />
      </div>

      <div className="text-right">
        <Link href="/auth/forgot-password" className="text-sm text-blue-600">
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}
