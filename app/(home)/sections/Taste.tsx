import { Button } from '@/components/ui/Button'


const Taste = () => {
    return (
        <div className='w-full'>
            <div className='wrapper'>
                <div className='grid md:grid-cols-2 gap-10 md:gap-20 mt-20 justify-center items-center'>
                    <div>
                        <h1 className='heading2'>
                            Taste & Flavour at Indian Grill Wrap & Go
                        </h1>
                        <p className='heading3 mt-4 text-justify'>
                            At Indian Grill Wrap & Go, every bite tells a story of bold flavor and authentic tradition. Our dishes are thoughtfully prepared to capture the essence of both Mediterranean and Halal American cuisines, blending savory spices, vibrant herbs, and premium ingredients to create an unforgettable dining experience. From the first taste to the last, you'll experience layers of richness and freshness in every meal. We don’t just serve food, we serve flavor.
                        </p>
                        <Button className='mt-8'>
                            Explore Our Menu
                        </Button>
                    </div>

                    <img
                        src="/home/hero/hero2.webp"
                        alt='Taste image'
                        className='w-[554px] rounded-3xl object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Taste