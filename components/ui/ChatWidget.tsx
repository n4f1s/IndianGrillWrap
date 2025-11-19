"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };
const STORAGE_KEY = "igrw_chat_memory_v1";
const MAX_MEMORY = 10;

function loadMemory(): Msg[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const arr = JSON.parse(raw) as Msg[];
        return Array.isArray(arr) ? arr.slice(-MAX_MEMORY) : [];
    } catch {
        return [];
    }
}

function saveMemory(msgs: Msg[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs.slice(-MAX_MEMORY)));
    } catch { }
}

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Msg[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages(loadMemory());
    }, []);

    useEffect(() => {
        saveMemory(messages);
    }, [messages]);

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, open]);

    const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

    async function send() {
        if (!canSend) return;
        const userMsg: Msg = { role: "user", content: input.trim() };
        const next = [...messages, userMsg];
        setMessages(next);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next }),
            });
            const data = await res.json();
            const assistantMsg: Msg = { role: "assistant", content: data.text ?? "Sorry, something went wrong." };
            setMessages((m) => [...m, assistantMsg]);
        } catch (e) {
            setMessages((m) => [...m, { role: "assistant", content: "Network error. Please try again." }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Open chat"
                className="fixed bottom-4 right-4 z-50 rounded-full bg-primary text-white w-12 h-12 shadow-lg hover:bg-primary/70 focus:outline-none"
            >
                {open ? "×" : "💬"}
            </button>

            {open && (
                <div className="fixed bottom-20 right-4 z-50 w-80 max-h-[70vh] bg-white border border-neutral-200 rounded-lg shadow-xl flex flex-col">
                    <div className="px-3 py-2 border-b border-neutral-200">
                        <div className="text-sm font-medium">Ask Indian Grill Wrap</div>
                        <div className="text-xs text-neutral-500">Instant help about menu, orders, and catering</div>
                    </div>

                    <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-3">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={m.role === "user" ? "text-right" : "text-left"}
                            >
                                <div
                                    className={
                                        m.role === "user"
                                            ? "inline-block px-3 py-2 rounded-lg bg-orange-600 text-white"
                                            : "inline-block px-3 py-2 rounded-lg bg-neutral-100"
                                    }
                                >
                                    <span className="text-sm whitespace-pre-wrap">{m.content}</span>
                                </div>
                            </div>
                        ))}
                        {loading && <div className="text-xs text-neutral-500">Thinking…</div>}
                    </div>

                    <div className="p-2 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => (e.key === "Enter" ? send() : undefined)}
                            placeholder="Ask about menu, delivery…"
                            className="flex-1 text-sm px-3 py-2 rounded-md border border-neutral-300 bg-white"
                        />
                        <button
                            onClick={send}
                            disabled={!canSend}
                            className="px-3 py-2 text-sm rounded-md bg-orange-600 text-white disabled:opacity-50"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
