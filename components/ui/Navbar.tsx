'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './navabr-menu';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const categories = [
    'Burgers',
    'Tandoor Specials',
    'Seafood Specials',
    'Chicken Specials',
    'Goat Specials',
    'Lamp Specials',
    'Beef Specials',
    'Rice Specials',
    'Vegeterians',
    'Wings, Nuggets & Tenders',
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 h-20">
      <nav aria-label="Primary" className="max-w-[1350px] w-full mx-auto sm:px-12 px-4 py-2">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Brand */}
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

          {/* Center: desktop primary links + mega menu */}
          <ul className="hidden md:flex items-center gap-6 text-base text-primary font-semibold">
            <li className="relative">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Menu">
                  <div className="flex flex-col gap-3 text-sm w-full">
                    {categories.map((label) => (
                      <HoveredLink key={label} href={`/menu?cat=${encodeURIComponent(label)}`}>
                        {label}
                      </HoveredLink>
                    ))}
                  </div>
                </MenuItem>
              </Menu>
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

          {/* Right: actions + mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
            >
              Sign in
            </button>
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-700/40"
            >
              Order now
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
              aria-controls="primary-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="primary-menu"
          className={`md:hidden ${open ? 'block' : 'hidden'} py-3`}
        >
          <ul className="space-y-2 text-sm text-gray-800">
            {/* Collapsible "Menu" section on mobile */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-1 max-h-72 overflow-auto rounded-md border border-gray-200">
                  <ul className="p-2 space-y-1">
                    {categories.map((label) => (
                      <li key={label}>
                        <Link
                          href={`/menu?cat=${encodeURIComponent(label)}`}
                          className="block rounded px-2 py-2 hover:bg-gray-50"
                          onClick={() => setOpen(false)}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>

            <li>
              <Link className="block rounded px-2 py-2 hover:bg-gray-50" href="/stories" onClick={() => setOpen(false)}>
                Stories
              </Link>
            </li>
            <li>
              <Link className="block rounded px-2 py-2 hover:bg-gray-50" href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="block rounded px-2 py-2 hover:bg-gray-50" href="/careers" onClick={() => setOpen(false)}>
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
  );
}
