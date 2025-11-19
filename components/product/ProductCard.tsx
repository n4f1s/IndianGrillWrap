import Image from "next/image"

type ProductCardProps = {
  img: string
  title: string
  description: string
  price: string
}

export default function ProductCard({
  img,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="w-full h-[420px] rounded-xl overflow-hidden bg-white hover:shadow transition-shadow">
      <div className="relative w-full h-60">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="flex flex-col justify-between gap-3 p-4 h-[calc(100%-15rem)]">
        <div>
          <h2 className="text-xl font-bold line-clamp-1">{title}</h2>
          <p className="text-sm text-gray-600 mt-1 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium text-rose-700">{price}</span>
          {/* <Button>Order Now</Button> */}
        </div>
      </div>
    </div>
  )
}
