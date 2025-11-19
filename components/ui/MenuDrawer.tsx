"use client";

import Link from "next/link";
import { useEffect } from "react";
import { MENU_CATEGORIES } from "@/lib/menuCategories";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function MenuDrawer({ open, onClose }: Props) {
    useEffect(() => {
        if (!open) return;
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    return (
        <>
            {/* Backdrop */}
            <div
                aria-hidden={!open}
                className={`fixed  inset-0 z-40 bg-black/70 transition-opacity duration-300  ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Panel */}
            <aside
                className={`
                    fixed h-[calc(100vh-80px)] z-50 w-120 max-w-full bg-white rounded-br-3xl
                    shadow-xl border-r border-neutral-200 overflow-y-auto
                    transform transition-transform duration-300 
                    ${open ? "translate-x-0" : "-translate-x-full"}
                `}
                aria-label="Menu categories"
            >
                {/* <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 text-black">
                    <span className="text-base font-semibold">Menu</span>
                    <button
                        onClick={onClose}
                        aria-label="Close menu"
                        className="text-xl leading-none px-2 py-1 cursor-pointer bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                        ×
                    </button>
                </div> */}

                <nav className="flex flex-col gap-3 p-4 ">
                    {MENU_CATEGORIES.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/menu/${cat.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-neutral-100 transition-colors"
                        >
                            <div className="size-14 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                                <img
                                    src={cat.image}
                                    alt={cat.label}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-medium">{cat.label}</span>
                                {cat.description && (
                                    <span className="text-xs text-neutral-500 line-clamp-1">
                                        {cat.description}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}

                    <Link
                        href="/menu"
                        onClick={onClose}
                        className="mt-2 text-sm font-medium text-primary hover:text-primary/70"
                    >
                        Explore all
                    </Link>
                </nav>
            </aside>
        </>
    );
}
