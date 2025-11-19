import Image from 'next/image';
import { Button } from '@/components/ui/Button';

function OrderFrom() {
  return (
    <section className="w-full">
      <div className="wrapper">
        <div className="relative rounded-3xl overflow-hidden min-h-[600px]">
          {/* Background image */}
          <Image
            src="/home/orderFrom2.webp"
            alt="Order from our website"
            fill
            priority={false}
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/35 to-transparent" />

          {/* Content inside the image */}
          <div className="absolute left-6 right-6 md:left-10 md:right-auto bottom-5 md:top-1/2 md:-translate-y-1/2">
            <div className="bg-white/90 text-black max-w-xl py-12 px-12 rounded-xl md:rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                Order From Our Website
              </h2>
              <p className="mt-3 text-black/70 leading-relaxed text-sm sm:text-base">
                Craving the bold, authentic flavors of Indian Grill Wrap & Go? Skip the wait and order directly from our website—fast, fresh, and just a few clicks away, for delivery or pickup whenever you need it. Taste convenience today!
              </p>
              <div className="mt-5">
                <Button href="/order" srLabel="Order online now">
                  ORDER NOW
                </Button>
              </div>
            </div>
          </div>

          {/* Optional min-height to keep aspect on small screens */}
          <div className="invisible h-[420px] sm:h-[560px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default OrderFrom;
