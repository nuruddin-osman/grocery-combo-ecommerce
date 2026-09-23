"use client";

import { useState, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function SearchBar({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  function openSearch() {
    setIsOpen(true);
    // wait a tick for the width transition before focusing
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function closeSearch() {
    if (!value) setIsOpen(false);
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`flex items-center rounded-full border transition-all duration-200 ease-out ${
          isOpen
            ? "w-56 border-dark-blue/15 bg-cream px-3 py-2"
            : "w-9 border-transparent bg-transparent px-0 py-0"
        }`}
      >
        {!isOpen && (
          <button
            type="button"
            onClick={openSearch}
            aria-label="পণ্য খুঁজুন"
            className="flex h-9 w-9 items-center justify-center rounded-full text-dark-blue/70 transition-colors hover:bg-light-cream hover:text-dark-blue"
          >
            <FiSearch size={18} />
          </button>
        )}

        {isOpen && (
          <>
            <FiSearch size={16} className="shrink-0 text-dark-blue/50" />
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={closeSearch}
              placeholder="পণ্য খুঁজুন..."
              className="font-inter ml-2 w-full bg-transparent text-sm text-dark-blue placeholder:text-dark-blue/40 focus:outline-none"
            />
            {value && (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setValue("");
                  inputRef.current?.focus();
                }}
                aria-label="মুছুন"
                className="ml-1 shrink-0 text-dark-blue/40 hover:text-dark-blue"
              >
                <FiX size={16} />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
