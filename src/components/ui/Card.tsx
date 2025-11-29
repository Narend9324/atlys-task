import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-gray-200 p-4 sm:p-6">
      <div className="bg-white rounded-xl p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};

export default Card;

