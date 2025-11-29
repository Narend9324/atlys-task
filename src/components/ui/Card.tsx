import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-black/5 p-2">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};

export default Card;

