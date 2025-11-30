import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-black/5 p-2">
      {children}
    </div>
  );
};

export default Card;

