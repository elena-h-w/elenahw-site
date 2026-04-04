"use client";

import { useState } from "react";

type NavProps = {
  activePage?: "home" | "writing";
};

export default function Nav({ activePage = "home" }: NavProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "/#about" },
    { label: "Product", href: "/#product" },
    { label: "Strategy", href: "/#strategy" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="mx-auto max-w-3xl px-6 py-3 flex items-center justify-between">
        <a href="/" className="text-sm font-medium text-neutral-900">
          Elena Wang
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-4 text-sm text-neutral-500">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.label === "Writing" && activePage === "writing"
                  ? "text-neutral-900 font-medium"
                  : "hover:text-neutral-900 transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="sm:hidden flex flex-col justify-center gap-1.5 p-1"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-5 bg-neutral-600 transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-neutral-600 transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-neutral-600 transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-neutral-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm text-neutral-500">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                link.label === "Writing" && activePage === "writing"
                  ? "text-neutral-900 font-medium"
                  : "hover:text-neutral-900 transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
