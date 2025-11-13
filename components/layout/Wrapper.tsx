// components/layout/Wrapper.tsx
import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
