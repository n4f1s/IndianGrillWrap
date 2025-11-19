// lib/ai/constants.ts
export const AI = {
  // Model and limits
  MODEL: process.env.GEMINI_MODEL ?? "gemini-1.5-flash",
  MAX_HISTORY_CHARS: Number(process.env.AI_MAX_HISTORY_CHARS ?? 4000),

  // Rate limit per minute per IP (basic, optional)
  RATELIMIT_RPM: Number(process.env.AI_RATELIMIT_RPM ?? 60),

  // LocalStorage memory
  LOCAL_MEMORY_KEY: "igrw_chat_memory_v1",
  LOCAL_MEMORY_LIMIT: 10,

  // UI defaults
  WIDGET_TITLE: process.env.NEXT_PUBLIC_SITE_NAME ?? "Site Assistant",
  WIDGET_TAGLINE: "Instant help about menu, orders, and catering",
} as const;

export type SiteContext = {
  businessName: string;
  tone: "friendly" | "helpful" | "concise";
  hours?: string;
  locations?: string[];
  deliveryAreas?: string[];
  menuHighlights?: string[];
  orderingLinks?: { pickup?: string; delivery?: string };
  policies?: string[];
  extraKnowledge?: string;
};

// Build context from env so it’s reusable across projects without code edits
export function envSiteContext(): SiteContext {
  const toList = (v?: string) =>
    v ? v.split(/[;,\n]/).map((s) => s.trim()).filter(Boolean) : undefined;

  return {
    businessName: process.env.NEXT_PUBLIC_SITE_NAME ?? "Your Business",
    tone: "friendly",
    hours: process.env.SITE_HOURS,
    locations: toList(process.env.SITE_LOCATIONS),
    deliveryAreas: toList(process.env.SITE_DELIVERY_AREAS),
    menuHighlights: toList(process.env.SITE_MENU_HIGHLIGHTS),
    orderingLinks: {
      pickup: process.env.SITE_PICKUP_URL,
      delivery: process.env.SITE_DELIVERY_URL,
    },
    policies: toList(process.env.SITE_POLICIES),
    extraKnowledge: undefined,
  };
}
