import { Button } from "@/components/ui/Button"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const data = [
    {
        img: "/burger.jpg",
        text: "Bacon Cheeseburger",
        link: "/"
    },
    {
        img: "/shrimp.jpg",
        text: "Bacon Cheeseburger",
        link: "/"
    },
    {
        img: "/burger.jpg",
        text: "Bacon Cheeseburger",
        link: "/"
    },
    {
        img: "/shrimp.jpg",
        text: "Bacon Cheeseburger",
        link: "/"
    },
    {
        img: "/burger.jpg",
        text: "Bacon Cheeseburger",
        link: "/"
    },
    {
        img: "/shrimp.jpg",
        text: "Bacon Cheeseburger",
        link: "/"
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
                                    <div className="relative">
                                        <Image
                                            width={240}
                                            height={240}
                                            src={e.img}
                                            alt="burger"
                                            className="size-[150px] sm:size-60 object-cover rounded-2xl"
                                        />
                                        <div className="group absolute bottom-2 right-2  size-10 rounded-lg bg-white border border-gray-400 shadow flex justify-center items-center hover:bg-gray-100">
                                            <Plus className="text-gray-500 size-5 group-hover:rotate-90" />
                                        </div>
                                    </div>
                                    <h3 className="my-3 text-sm sm:text-base font-semibold">
                                        {e.text}
                                    </h3>
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