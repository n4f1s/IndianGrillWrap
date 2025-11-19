import Catering from "./sections/Catering"
import FAQ from "./sections/FAQ"
import Featured from "./sections/Featured"
import HeroSwiper from "./sections/HeroSwiper"
import OrderFrom from "./sections/OrderFrom"
import Savor from "./sections/Savor"
import Taste from "./sections/Taste"
import Testimonials from "./sections/Testimonials"
import Welcome from "./sections/Welcome"


function HomePage() {
    return (
        <>
            <HeroSwiper />
            <Welcome />
            <Featured />
            <Taste />
            <OrderFrom />
            <Savor />
            <Catering />
            <Testimonials />
            <FAQ />
        </>
    )
}

export default HomePage