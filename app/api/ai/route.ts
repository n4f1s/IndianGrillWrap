// app/api/ai/route.ts
import { NextRequest } from "next/server";
import { getGemini } from "@/lib/ai/gemini";
import { buildSystemPrompt, type Message, type SiteContext } from "@/lib/ai/prompt";
import { Content } from "@google/generative-ai";

export const runtime = "edge";

const siteContext: SiteContext = {
  businessName: "Indian Grill Wrap & Go",
  tone: "friendly",
  hours: "Mon–Sun 11am–10pm",
  locations: ["Main St, Cityville"],
  deliveryAreas: ["Cityville central, Northside"],
  menuHighlights: ["Chicken tikka wrap", "Paneer wrap", "Shrimp biryani", "Mango lassi"],
  orderingLinks: { pickup: "/order", delivery: "/order?mode=delivery" },
  policies: ["Allergen info available on request", "Delivery ETA provided by courier"],
  extraKnowledge: `
Hero items and daily specials rotate; check Featured section on homepage.
Spicy levels: mild, medium, hot. Halal chicken used in wraps.
We cannot confirm exact delivery times—only ranges from providers.
`.trim(),
};

// Function to map our Message array to Google's Content array
function buildHistory(messages: Message[]): Content[] {
  return messages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages }: { messages: Message[] } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages required" }), { status: 400 });
    }

    const model = getGemini(); // This correctly gets "gemini-pro"
    const systemPrompt = buildSystemPrompt(siteContext);
    
    // Convert the user's message history into the format Google's API expects
    const history = buildHistory(messages);
    const lastUserMessage = history.pop()!; // Get the user's most recent message

    // THE FIX:
    // We create the chat history manually.
    // 1. We insert the system prompt as the very first "user" message.
    // 2. We add a fake "model" response to keep the alternating user/model pattern.
    // 3. We then add the rest of the actual conversation.
    const chatHistory: Content[] = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Understood." }] },
      ...history,
    ];

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
      },
      // The unsupported 'systemInstruction' field has been REMOVED.
    });

    const result = await chat.sendMessage(lastUserMessage.parts);
    const text = result.response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } catch (err: any) {
    console.error("[API_ERROR]", err); 
    return new Response(JSON.stringify({ error: err.message ?? "AI error" }), { status: 500 });
  }
}
