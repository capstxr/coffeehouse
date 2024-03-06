import Hero from "./elems/hero";
import Intro from "./elems/intro";
import Menu from "./elems/minimenu";
import WhyChooseUs from "./elems/why_us";

const Home = () => {
    return (
        <main>
            <Hero/>

            <Intro/>

            <Menu/>

            <WhyChooseUs/>
        </main>
    );
}

export default Home;