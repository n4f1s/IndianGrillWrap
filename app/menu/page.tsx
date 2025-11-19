import ZoomableMenuImage from "@/components/product/ZoomableMenuImage"


const categories = [
    {
        name: "Wraps & Wings",
        items: [
            { name: "Veggie Wraps", price: "$9.99" },
            { name: "Chicken Tikka Masala Wrap", price: "$9.99" },
            { name: "Wings Lovers (6 pcs)", price: "$8.99" },
        ],
    },
    {
        name: "Tandoor Specials",
        items: [
            { name: "Tandoori Chicken Half", price: "$15.99" },
            { name: "Chicken Tikka", price: "$16.99" },
            { name: "Lamb Sheekh Kabab", price: "$21.99" },
        ],
    },
    {
        name: "Biryani & Rice",
        items: [
            { name: "Chicken Tikka Biryani", price: "$15.99" },
            { name: "Chicken Biryani", price: "$16.99" },
            { name: "Lamb Biryani", price: "$18.99" },
        ],
    },
    {
        name: "Curries",
        items: [
            { name: "Chicken Curry", price: "$15.99" },
            { name: "Lamb Curry", price: "$18.99" },
            { name: "Goat Curry", price: "$18.99" },
        ],
    },
    {
        name: "Vegetarian Favourites",
        items: [
            { name: "Saag Paneer", price: "$14.99" },
            { name: "Channa Masala", price: "$13.99" },
            { name: "Mixed Veg Curry", price: "$14.99" },
        ],
    },
    {
        name: "Sides & Drinks",
        items: [
            { name: "Garlic Naan", price: "$4.99" },
            { name: "Mango Lassi", price: "$3.99" },
            { name: "Soft Drinks", price: "$2.50" },
        ],
    },
]

export const metadata = {
    title: "Menu | Indian Grill Wrap & Go",
    description:
        "Browse the full menu for Indian Grill Wrap & Go – wraps, tandoor specials, curries, biryani, vegetarian dishes, desserts, and beverages.",
}

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <section className="wrapper">
                {/* Header */}
                <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                            Menu
                        </p>
                        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
                            Savor The Flavors
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
                            Explore our full menu of wraps, tandoor specials, biryanis, rich
                            curries, vegetarian favourites, and refreshing beverages, inspired
                            by authentic Indian flavors.
                        </p>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-primary">
                            Open Daily · 11:30 AM – 11:30 PM
                        </span>
                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1">
                            Halal · Dine‑in · Takeout
                        </span>
                    </div>
                </header>

                {/* Reference menu images */}
                {/* <section className="mt-8 flex flex-col gap-6">
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/menu1.webp"
              alt="Indian Grill Wrap & Go printed menu, part 1"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover md:object-cover"
            />
          </div>
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/menu2.webp"
              alt="Indian Grill Wrap & Go printed menu, part 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover md:object-cover"
            />
          </div>
        </section> */}

                <section className="mt-8 space-y-6">
                    <ZoomableMenuImage
                        src="/menu1.webp"
                        alt="Indian Grill Wrap & Go printed menu, part 1"
                    />
                    <ZoomableMenuImage
                        src="/menu2.webp"
                        alt="Indian Grill Wrap & Go printed menu, part 2"
                    />
                </section>

                {/* Digital menu list */}
                {/* <section className="mt-10 lg:mt-14">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                            Our Digital Menu
                        </h2>
                        <span className="text-xs sm:text-sm text-slate-500">
                            Prices and availability may vary · Please inform us of any
                            allergies.
                        </span>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {categories.map((cat) => (
                            <div
                                key={cat.name}
                                className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                            >
                                <h3 className="text-base sm:text-lg font-semibold text-primary">
                                    {cat.name}
                                </h3>
                                <ul className="mt-1 space-y-2">
                                    {cat.items.map((item) => (
                                        <li
                                            key={item.name}
                                            className="flex items-baseline justify-between gap-3 text-sm text-slate-800"
                                        >
                                            <span className="flex-1">{item.name}</span>
                                            <span className="shrink-0 font-medium text-primary">
                                                {item.price}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section> */}

                {/* Callout / Note */}
                <section className="mt-10 border-t border-slate-200 pt-6">
                    <p className="mt-2 text-sm sm:text-base font-semibold text-center">
                        Looking for catering or large orders? Contact us for custom party
                        trays, family packs, and special-event menus tailored to your
                        guests.
                    </p>
                </section>
            </section>
        </main>
    )
}
