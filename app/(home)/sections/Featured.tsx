import { Button } from "@/components/ui/Button"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const data = [
    {
        img: "/featured/tandoorichicken.webp",
        text: "Tandoori Chicken",
        link: "/",
        description: "Spice up your meal with our flavorful Tandoori Chicken, marinated in yogurt and traditional spices, then grilled to perfection."
    },
    {
        img: "/featured/chickencurry.webp",
        text: "Chicken Curry",
        link: "/",
        description: "Experience the rich and aromatic flavors of our Chicken Curry, simmered in a blend of spices and herbs for a comforting and satisfying dish."
    },
    {
        img: "/featured/goatbiryani.webp",
        text: "Goat Biryani",
        link: "/",
        description: "Indulge in our Goat Biryani, a fragrant rice dish layered with tender goat meat, spices, and herbs, offering a delightful explosion of flavors in every bite."
    },
    {
        img: "/featured/chickentikka.webp",
        text: "Chicken Tikka",
        link: "/",
        description: "Savor the smoky and succulent Chicken Tikka, marinated in a blend of spices and yogurt, then grilled to perfection for a delicious appetizer or main course."
    },
    {
        img: "/featured/goatcurry.webp",
        text: "Goat Curry",
        link: "/",
        description: "Delight in our Goat Curry, featuring tender goat meat cooked in a rich and flavorful sauce made with a blend of aromatic spices, perfect for a hearty meal."
    },
    {
        img: "/featured/mangolassi.webp",
        text: "Mango Lassi",
        link: "/",
        description: "Cool down with our refreshing Mango Lassi, a creamy blend of ripe mangoes, yogurt, and a hint of cardamom, perfect for a sweet treat."
    },
]

function Featured() {
    return (
        <div className="w-full">
            <div className="wrapper">
                <div className="flex justify-between mb-6">
                    <h1 className="heading2">
                        Featured
                    </h1>
                    <Button variant="secondary">
                        View Menu
                    </Button>
                </div>

                <div className="overflow-clip">
                    <div className="flex gap-3 sm:gap-8">
                        {data.map((e, i) => (
                            <Link href={e.link} key={i}>
                                <div className="w-[150px] sm:w-60 h-auto cursor-pointer">
                                    <div className="relative size-[150px] sm:size-60">
                                        <Image
                                            fill
                                            src={e.img}
                                            sizes="(max-width: 640px) 200px, 340px"
                                            alt="burger"
                                            className="object-cover rounded-2xl"
                                        />
                                        <div className="group absolute bottom-2 right-2  size-10 rounded-lg bg-white border border-gray-400 shadow flex justify-center items-center hover:bg-gray-100">
                                            <Plus className="text-gray-500 size-5 group-hover:rotate-90" />
                                        </div>
                                    </div>
                                    <h3 className="mt-3 text-sm sm:text-base font-semibold">
                                        {e.text}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-semibold line-clamp-2">
                                        {e.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured