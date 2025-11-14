'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

type Testimonial = {
  quote: string;
  author: string;
  avatar: string;
};

const items: Testimonial[] = [
  {
    quote:
      "I bought chicken from Halal Haven, and it was really good! The food was tasty, and the service was friendly.",
    author: 'Rofikul I.',
    avatar: '/home/testimonial1.jpg',
  },
  {
    quote:
      'The food and portion size is exceptional! Favorites are the wedges and the honey BBQ chicken! The food is fresh.',
    author: 'Maria P.',
    avatar: '/home/testimonial2.jpg',
  },
  {
    quote:
      'Chicken over rice was amazing. Crispy fries and fresh. Customer service was excellent. 10/10 recommend!',
    author: 'York L.',
    avatar: '/home/testimonial3.jpg',
  },
  {
    quote:
      'Lovely ambiance and quick service. The shawarma platter was packed with flavor and perfectly cooked.',
    author: 'Amina K.',
    avatar: '/home/testimonial1.jpg',
  },
  {
    quote:
      'Great value for money. Generous portions and the garlic sauce is addictive. Will return soon.',
    author: 'Rahul S.',
    avatar: '/home/testimonial2.jpg',
  },
  {
    quote:
      'Ordered online for pickup—ready on time and still hot when I got home. Delicious and consistent.',
    author: 'Lena M.',
    avatar: '/home/testimonial3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section
      role="region"
      aria-label="What our guests are saying"
      className="w-full"
    >
      <div className="wrapper">
        <div className='bg-gray-100 pt-10 rounded-2xl'>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading2">
              What our guests are saying
            </h2>
          </div>

          <div className="rounded-3xl p-4 sm:p-6 lg:p-10">
            <Swiper
              modules={[Autoplay, Keyboard, A11y]}
              slidesPerView={1}
              spaceBetween={16}
              loop
              speed={600}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              // pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1.05, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="p-1!"
            >
              {items.map((t, i) => (
                <SwiperSlide key={i} aria-label={`Testimonial ${i + 1}`}>
                  <article className="h-[250px] rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 relative">
                    <div className="flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>

                    <p className="mt-3 text-gray-800 line-clamp-4">
                      {t.quote}
                    </p>

                    {/* absolutely positioned author row */}
                    <div className="absolute bottom-5 left-5 mt-0 flex items-center gap-3">
                      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-black/5">
                        <Image
                          src={t.avatar}
                          alt={t.author}               // or alt="" if purely decorative
                          width={64}
                          height={64}
                          sizes="32px"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-sm text-gray-700 font-medium">{t.author}</div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
