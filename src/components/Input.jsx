import { EyeClosed, Eye } from "lucide-react"; // استيراد Eye بدلاً من التكرار
import React, { useState } from "react";

const Input = ({ placeholder, onChange, value, type, name }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 mb-4 relative">
      <label className="text-[20px] font-bold text-white mr-2">{name}</label>
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        className="w-full p-2 border border-gray-300 rounded bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {type === "password" && (
        <div className="absolute right-4 top-12 cursor-pointer">
          {isPasswordVisible ? (
            <EyeClosed
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          ) : (
            <Eye onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
