import AuthTabs from "./AuthTabs";
import Image from "next/image";

export default function AuthLayout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* Left Image */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100">
        <Image
          src="/auth/login-side.jpg"
          alt="Auth illustration"
          className="max-w-md"
          width={500}
          height={500}
        />
      </div>

      {/* Right Tabs */}
      <div className="w-full md:w-1/2 flex justify-center px-6 py-10">
        <AuthTabs />
      </div>
    </div>
  );
}
