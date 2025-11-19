"use client";

import Link from "next/link";
import { useState } from "react";
import MenuDrawer from "@/components/ui/MenuDrawer";
import { MENU_CATEGORIES } from "@/lib/menuCategories";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white backdrop-blur h-20 shadow">
        <nav
          aria-label="Primary"
          className="max-w-[1350px] w-full mx-auto sm:px-12 px-4 py-2 bg-white"
        >
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Brand"
                  className="w-[140px] h-auto"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <ul className="hidden md:flex items-center gap-6 text-base text-primary font-semibold">
              <li>
                <button
                  type="button"
                  onClick={() => setMenuDrawerOpen(!menuDrawerOpen)}
                  className={cn("flex items-center gap-1",
                    menuDrawerOpen ? "text-black/90" : "text-primary hover:text-black/90"
                  )}
                >
                  Menu
                  <span
                    className={cn(
                      "transition-transform duration-300",
                      menuDrawerOpen ? "-rotate-180" : "rotate-0"
                    )}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded"
                  href="/stories"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="hidden sm:inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
              >
                Sign in
              </button>
              <Link
                href="/order"
                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Order now
              </Link>

              <button
                type="button"
                className="md:hidden ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                aria-controls="primary-menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 7h16M4 12h16M4 17h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            id="primary-menu"
            className={`md:hidden ${open ? "block" : "hidden"} py-3`}
          >
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="rounded">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded px-2 py-2 hover:bg-gray-50">
                    <span className="font-semibold">Menu</span>
                    <svg
                      className="h-4 w-4 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </summary>
                  <div className="mt-1 max-h-72 overflow-auto rounded-md border border-gray-200 bg-gray-100">
                    <ul className="p-2 space-y-1">
                      {MENU_CATEGORIES.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            href={`/menu/${cat.slug}`}
                            className="block rounded px-2 py-2 hover:bg-gray-50"
                            onClick={() => setOpen(false)}
                          >
                            {cat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </li>

              <li>
                <Link
                  className="block rounded px-2 py-2 hover:bg-gray-50"
                  href="/stories"
                  onClick={() => setOpen(false)}
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  className="block rounded px-2 py-2 hover:bg-gray-50"
                  href="/about"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="block rounded px-2 py-2 hover:bg-gray-50"
                  href="/careers"
                  onClick={() => setOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-200">
                <Link
                  className="block rounded-full bg-rose-600 px-4 py-2 text-center font-medium text-white hover:bg-rose-700"
                  href="/order"
                  onClick={() => setOpen(false)}
                >
                  Order now
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <MenuDrawer
        open={menuDrawerOpen}
        onClose={() => setMenuDrawerOpen(false)}
      />
    </>
  );
}
