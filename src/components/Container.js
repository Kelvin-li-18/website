import React from "react";

export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
      {children}
    </div>
  );
}