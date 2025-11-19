"use client"

import { useState, useId } from "react"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

type AccordionItemProps = {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function AccordionItem({ question, answer, defaultOpen }: AccordionItemProps) {
  const [open, setOpen] = useState(!!defaultOpen)
  const contentId = useId()
  const buttonId = useId()

  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 shadow-sm">
      <button
        id={buttonId}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={contentId}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
      >
        <span className="text-sm font-medium text-slate-900">
          {question}
        </span>
        <ChevronDown
          className={clsx(
            "h-4 w-4 text-primary transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={clsx(
          "grid overflow-hidden px-4 transition-all duration-200 ease-out",
          open ? "grid-rows-[1fr] py-2 opacity-100" : "grid-rows-[0fr] py-0 opacity-0",
        )}
      >
        <div className="min-h-0">
          <p className="pb-3 text-sm text-slate-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
