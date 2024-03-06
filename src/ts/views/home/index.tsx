import Hero from "./elems/hero";
import Intro from "./elems/intro";
import Menu from "./elems/minimenu";
import OrderNow from "./elems/order_now";
import WhyChooseUs from "./elems/why_us";

const Home = () => {
    return (
        <main>
            <Hero/>

            <Intro/>

            <Menu/>

            <WhyChooseUs/>

            <OrderNow/>
        </main>
    );
}

export default Home;