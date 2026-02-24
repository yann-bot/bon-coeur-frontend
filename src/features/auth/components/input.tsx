


import React, { useState, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClass?: string;
  showPasswordToggle?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  containerClass = "",
  type = "text",
  showPasswordToggle = false,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === "password";
  const canToggle = isPassword && showPasswordToggle;
  const inputType = canToggle ? (isVisible ? "text" : "password") : type;

  const toggleIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500 hover:text-gray-700 transition-colors shrink-0"
      aria-hidden
    >
      {isVisible ? (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </>
      ) : (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );

  return (
    <div className={`flex flex-col gap-1 ${containerClass}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          type={inputType}
          className={`
            w-full px-3 py-2 rounded border pr-10
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition
            ${error ? "border-red-500" : "border-gray-300"}
            ${className}
          `}
        />
        {canToggle && (
          <button
            type="button"
            onClick={() => setIsVisible((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            aria-label={isVisible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            tabIndex={-1}
          >
            {toggleIcon}
          </button>
        )}
      </div>

      {error && (
        <span className="mt-1 block text-sm text-red-600" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;