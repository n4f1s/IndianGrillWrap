'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Button } from '@/components/ui/Button';

type Slide = {
    title: string;
    subtitle: string;
    cta?: { label: string; href: string };
    img: string; // path under /public
};

const slides: Slide[] = [
    {
        title: 'Handmade Excellence',
        subtitle:
            'Seasonal ingredients, wood-fired flavors, and plates meant to share—crafted fresh every day.',
        cta: { label: 'Reserve a Table', href: '/reservations' },
        img: '/home/hero/hero1.webp'
    },
    {
        title: 'From Farm to Fork',
        subtitle:
            'Local produce, sustainable sourcing, and thoughtful pairings that let ingredients shine.',
        cta: { label: 'View Menu', href: '/menu' },
        img: '/home/hero/hero2.webp'
    },
    {
        title: 'Evenings to Remember',
        subtitle:
            'Warm hospitality, candlelit ambiance, and desserts worth lingering over.',
        cta: { label: 'Book Your Evening', href: '/reservations' },
        img: '/home/hero/hero3.webp'
    }
];

export default function HeroSwiper() {
    return (
        <section aria-label="Featured dishes and dining experience" className="w-full">
            <div className="h-screen min-h-[620px] relative">
                <Swiper
                    modules={[Pagination, Autoplay, A11y, EffectFade]}
                    slidesPerView={1}
                    loop
                    effect="fade"
                    speed={700}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    //   pagination={{ clickable: true }}
                    className="h-full"
                >
                    {slides.map((s, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative h-full w-full">
                                {/* background image */}
                                <Image
                                    src={s.img}
                                    alt=""
                                    fill
                                    priority={i === 0}
                                    sizes="100vw"
                                    className="object-cover"
                                />

                                {/* gradient overlay for text legibility */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-black/0" />

                                {/* centered content */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="mx-auto max-w-3xl px-6 text-center text-white flex flex-col justify-center items-center">
                                        <div className='relative w-20 h-20'>
                                            <img
                                                src="/fire.gif"
                                                alt=''
                                                className='size-20 object-contain'
                                            />
                                        </div>
                                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight leading-tight">
                                            {s.title}
                                        </h1>
                                        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90">
                                            {s.subtitle}
                                        </p>

                                        <div className='mt-8 flex gap-4'>
                                            <Button href='/menu' srLabel="Order online">Order Online</Button>
                                            <Button variant='secondary'>Book a Table</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
