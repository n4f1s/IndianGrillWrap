import { AccordionItem } from "@/components/ui/AccordionItem"


const faqs = [
  {
    question: "What are your opening hours?",
    answer:
      "We are open every day from 11:30 AM to 11:30 PM, including weekends and most holidays.",
  },
  {
    question: "Do you offer delivery or pickup?",
    answer:
      "Yes, we offer both pickup and delivery through our website and popular delivery partners in Brooklyn.",
  },
  {
    question: "Are your dishes Halal?",
    answer:
      "All of our meat is sourced from certified Halal suppliers and prepared according to Halal guidelines.",
  },
  {
    question: "Can you accommodate allergies or dietary needs?",
    answer:
      "Absolutely. Please let our staff know about any allergies or dietary preferences, and we will guide you to suitable options.",
  },
  {
    question: "Do you provide catering for events?",
    answer:
      "Yes, we cater for parties, office lunches, and events. Contact us to discuss your guest count, menu preferences, and pricing.",
  },
  {
    question: "Do you have vegetarian or vegan options?",
    answer:
      "Yes. Our menu includes several vegetarian dishes and some vegan-friendly options, and we are happy to suggest the best choices for you.",
  },
  {
    question: "Can I place an order in advance?",
    answer:
      "You can pre-order online or by phone and choose a preferred pickup or delivery time during our regular opening hours.",
  },
  {
    question: "Is there seating available, or are you takeout only?",
    answer:
      "We offer both dine-in seating and takeout. During busy hours, there may be a short wait for tables.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, contactless payments, and cash for in-store orders. Online orders can be paid securely at checkout.",
  },
  {
    question: "Can I customize the spice level of my dish?",
    answer:
      "Yes. Many of our dishes can be prepared mild, medium, or spicy—just let us know your preferred heat level when ordering.",
  },
  {
    question: "Do you have any specials or combo deals?",
    answer:
      "We regularly feature combo meals and limited-time specials. Check our menu page or follow us on social media for the latest offers.",
  },
  {
    question: "How can I contact you for large or corporate orders?",
    answer:
      "For large, corporate, or recurring orders, please call the restaurant or reach out via our contact form so we can help plan your menu and schedule.",
  },
]

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="wrapper mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Find quick answers about our hours, ordering, and services.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
