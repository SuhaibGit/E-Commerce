import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Branding from "./components/branding";
import Listing from "./components/listing";
import Hero2 from "./components/hero2";
import Esp from "./components/esp";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Branding/>
      <Listing/>
      <Hero2/>
      <Esp/>
      <Footer/>
    </div>
  );
}
