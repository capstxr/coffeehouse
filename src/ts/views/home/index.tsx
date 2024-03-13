import Hero from "./elems/hero";
import Intro from "./elems/intro";
import Menu from "./elems/minimenu";
import OrderNow from "./elems/order_now";
import WhyChooseUs from "./elems/why_us";
import Reviews from "./elems/reviews";

const Home = () => {
    return (
        <main>
            <Hero/>

            <Intro/>

            <Menu/>

            <WhyChooseUs/>

            <OrderNow/>

            <Reviews/>
        </main>
    );
}

export default Home;