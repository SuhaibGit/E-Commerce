import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Branding from "./components/branding";
import Listing from "./components/listing";
import Hero2 from "./components/hero2";
import Esp from "./components/esp";
import Footer from "./components/footer";
import Navbar1 from "./components/navbar1";
import Pro_det from "./components/pro_det";

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
