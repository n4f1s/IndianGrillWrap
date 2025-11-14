import { Button } from '@/components/ui/Button'


const Welcome = () => {
    return (
        <div className='w-full'>
            <div className='wrapper'>
                <div className='grid md:grid-cols-2 gap-10 md:gap-20 justify-center items-center'>
                    <img
                        src="/home/hero/hero1.webp"
                        alt='welcome image'
                        className='w-full md:w-[554px] rounded-3xl object-cover'
                    />

                    <div>
                        <h1 className='heading2'>
                            Welcome To Indian Grill Wrap & Go
                        </h1>
                        <p className='heading3 mt-4 text-justify'>
                            Experience the rich fusion of Mediterranean and Halal American cuisine at Indian Grill Wrap & Go. Located at 173-73 106th Ave, Jamaica, NY, we serve authentic flavors made with the finest ingredients and a passion for quality. Our menu blends tradition, purity, and bold creativity. Whether you're dining in or on the go, Indian Grill Wrap & Go brings heart, heritage, and unforgettable taste to every meal.
                        </p>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-10 md:gap-20 mt-20 justify-center items-center'>
                    <img
                        src="/home/hero/hero2.webp"
                        alt='welcome image'
                        className='w-[554px] rounded-3xl object-cover'
                    />

                    <div>
                        <h1 className='heading2'>
                            Flavored Wings Now 41 Flavor
                        </h1>
                        <p className='heading3 mt-4 text-justify'>
                            Discover the ultimate wing experience at Indian Grill Wrap & Go in Jamaica, NY — now serving 41 incredible flavored wings! From Honey BBQ and Garlic Parmesan to bold favorites like Ghost Pepper and Mango Habanero, every bite is cooked fresh to order for perfect flavor and crunch. Choose your size — 5, 10, 20, 50, or even 200 pieces — and taste why Indian Grill Wrap & Go is the go-to spot for the best halal wings in New York.
                        </p>
                        <Button href='/menu' className='mt-8'>
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome