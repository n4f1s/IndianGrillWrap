import Image from "next/image"

const savorImages = [
    {
        src: "/featured/tandoorichicken.webp",
        alt: "Tandoori chicken on a sizzling platter",
    },
    {
        src: "/featured/chickencurry.webp",
        alt: "Bowl of creamy chicken curry with herbs",
    },
    {
        src: "/featured/goatbiryani.webp",
        alt: "Plate of fragrant goat biryani with basmati rice",
    },
    {
        src: "/featured/chickentikka.webp",
        alt: "Skewers of grilled chicken tikka",
    },
    {
        src: "/featured/mixedpakura.webp",
        alt: "Assorted vegetable pakoras on a tray",
    },
    {
        src: "/featured/veggiesamosa.webp",
        alt: "Crispy vegetable samosas on a plate",
    },
]

function Savor() {
    return (
        <div className="w-full">
            <div className="wrapper">
                <div className="max-w-2xl">
                    <h2 className="heading2">Savor The Flavors</h2>
                    <p className="normal my-4">
                        Let your appetite be inspired by our stunning food photography. From sizzling
                        entrées to savory sides, each image tells a delicious story worth savoring.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
                    {savorImages.map((img, i) => (
                        <div className="relative w-full aspect-square group" key={i}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 640px) 50vw, 33vw"
                                className="rounded-2xl hover:scale-102 transition-transform duration-200 object-cover"
                            />
                            <p className="absolute bottom-3 left-3 max-w-[80%] rounded-md bg-black/60 px-2 py-1 text-white text-xs sm:text-sm font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {img.alt}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Savor
