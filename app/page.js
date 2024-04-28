"use client";
// ui-components
import {
  Bonus,
  Countdown,
  Footer,
  Header,
  Hero,
  Offers,
  Pricing,
  Testimonials,
} from "../components/index.js";

const Home = () => {
  return (
    <div className="relative">
     
      <Header />
      <Hero />
      <Countdown />
      <Offers />
      <Bonus />
     

      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
