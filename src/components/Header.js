import React from "react";

export default function Header({ profile, socialLinks }) {
  return (
    <header className="mb-16">
      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full max-w-[180px] rounded-xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-normal tracking-tight text-black sm:text-4xl">
            {profile.name}
          </h1>

          <div className="mt-4 max-w-3xl text-sm leading-7 text-black sm:text-base">
            {profile.description}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-black sm:text-[0.95rem]">
            {socialLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition-colors hover:text-orange-500"
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 && (
                  <span className="text-black">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}