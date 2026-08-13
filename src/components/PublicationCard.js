import React, { useEffect, useState } from "react";

function formatAuthors(authors) {
  return authors
    .map((author) => `${author.name}${author.equal ? "*" : ""}`)
    .join(", ");
}

export default function PublicationCard({ publication }) {
  const { title, venue, authors, links, description, image } = publication;
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsZoomed(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed]);

  return (
    <>
      <article className="paper-card grid grid-cols-1 items-center gap-6 rounded-xl border border-transparent p-4 sm:grid-cols-[180px_minmax(0,1fr)]">
        <div className="self-center">
          {image ? (
            <button
              type="button"
              onClick={() => setIsZoomed(true)}
              className="block w-full cursor-zoom-in border-0 bg-transparent p-0 outline-none focus:outline-none focus:ring-0"
              aria-label={`Zoom image for ${title}`}
            >
              <img
                src={image}
                alt={title}
                className="aspect-[5/4] w-full rounded-md border border-neutral-200 bg-white object-contain p-2"
              />
            </button>
          ) : (
            <div className="flex aspect-[5/4] w-full items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-sm text-black">
              Image coming soon
            </div>
          )}
        </div>

        <div className="flex flex-col gap-0.5">
          <h3 className="text-lg font-medium leading-tight text-black sm:text-xl">
            {title}
          </h3>

          <p className="text-sm leading-tight text-black">
            {formatAuthors(authors)}
          </p>

          <p className="text-sm leading-tight text-black">{venue}</p>

          {links && links.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-3 text-sm leading-tight text-black">
              {links.map((link, index) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-colors hover:text-orange-500"
                  >
                    {link.label}
                  </a>
                  {index < links.length - 1 && (
                    <span className="text-black">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {description && (
            <p className="mt-3 text-sm leading-6 text-black">{description}</p>
          )}
        </div>
      </article>

      {isZoomed && image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="max-h-[90vh] max-w-[90vw] rounded-lg bg-white object-contain p-2 shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}