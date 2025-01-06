import React from 'react';

export default function InputField({ label, type, placeholder, className="" }: any) {
  return (
    <div>
      <label className="block text-gray-600 text-sm mb-2">{label}</label>
      <input
        type={type}
        className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
}