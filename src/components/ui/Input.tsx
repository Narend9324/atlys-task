import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className = "", ...rest }) => (
  <label className="flex flex-col gap-1.5">
    {label && <span className="text-sm font-medium text-gray-800">{label}</span>}
    <input
      {...rest}
      className={`w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm font-normal text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 ${className}`}
    />
  </label>
);

export default Input;
