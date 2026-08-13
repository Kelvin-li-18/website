import React from "react";

export default function Section({ title, children }) {
  return (
    <section className="mb-14">
      <h2 className="mb-5 text-xl font-medium tracking-tight text-black sm:text-[1.4rem]">
        {title}
      </h2>
      {children}
    </section>
  );
}