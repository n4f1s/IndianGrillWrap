import { Button } from '@/components/ui/Button'


const Catering = () => {
    return (
        <div className='w-full'>
            <div className='wrapper'>
                <div className='grid md:grid-cols-2 gap-10 md:gap-20 justify-center items-center'>
                    <div>
                        <h1 className='heading2'>
                            Catering With Flavor
                        </h1>
                        <p className='heading3 mt-4 text-justify'>
                            Make your next event unforgettable with Indian Grill Wrap & Go catering services! Whether it’s a corporate gathering, family celebration, or special occasion, we bring the bold, authentic tastes of Mediterranean and Halal American cuisine straight to your table. Enjoy quality, convenience, and a menu tailored to satisfy every guest.
                        </p>
                        <Button className='mt-8'>
                            Order Catering
                        </Button>
                    </div>

                    <img
                        src="/home/catering.webp"
                        alt='Taste image'
                        className='w-[554px] rounded-3xl object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Catering