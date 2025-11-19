import { Button } from '@/components/ui/Button'


const Welcome = () => {
    return (
        <div className='w-full'>
            <div className='wrapper'>
                <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
                    {/* Image: first on mobile, second on md+ */}
                    <img
                        src="/menu/food.webp"
                        alt="welcome image"
                        className="order-2 md:order-1 w-full md:w-[554px] rounded-3xl object-cover"
                    />

                    {/* Text: second on mobile, first on md+ */}
                    <div className="order-1 md:order-2">
                        <h1 className="heading2">
                            Welcome to Indian Grill Wrap &amp; Go
                        </h1>
                        <p className="heading3 mt-4 text-justify">
                            Explore more than 70 dishes at Indian Grill Wrap &amp; Go – from
                            loaded wraps, burgers, and rice platters to slow-cooked curries,
                            grilled tandoori specialties, and fresh salads. Every item is
                            cooked Halal, with plenty of vegetarian and vegan‑friendly choices
                            so everyone at the table finds something they love.
                        </p>
                        <p className="heading3 mt-4 text-justify">
                            Build the meal you are craving with our sub‑menus for wraps,
                            tandoori, seafood, chicken, goat, lamb, beef, biryani,
                            breads, desserts, beverages, and more. Whether you are grabbing a
                            quick wrap to go or sharing a full spread with friends, our menu
                            is designed for mixing, matching, and discovering new favorites.
                        </p>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-10 md:gap-20 mt-8 sm:mt-20 justify-center items-center'>
                    <div>
                        <h2 className="heading2">
                            So Many Ways to Build Your Plate
                        </h2>
                        <p className="heading3 mt-4 text-justify">
                            Start with what you are craving – a warm wrap, a rice platter, or
                            a creamy curry – then layer on grilled tandoori meats, hearty
                            goat and lamb dishes, seafood specials, or vegetable curries and
                            paneer. Add salads, lentil sides, fresh naan, and chutneys to
                            complete your perfect plate.
                        </p>
                        <p className="heading3 mt-4 text-justify">
                            With clear sub‑menus for every category, it is easy to find your
                            favorites fast or try something new each visit. From light, veggie
                            options to rich, slow‑cooked specialties, Indian Grill Wrap
                            &amp; Go gives you a lot of choice without feeling overwhelming.
                        </p>
                        <Button href="/menu" className="mt-8">
                            Explore Full Menu
                        </Button>
                    </div>

                    <img
                        src="/menu/chicken.webp"
                        alt='welcome image'
                        className='w-[554px] rounded-3xl object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Welcome