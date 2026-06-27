import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Audience from "../components/Audience";
import CardsSlider from "../components/CardsSlider";
import GameCode from "../components/GameCode";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Audience />
      <CardsSlider />
      <GameCode />
      <Features />
      <Testimonial />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}
