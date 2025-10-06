"use client";
import HeroSection from "./components/HeroSection";
import President from "./components/President";
import StickyMenu from "./components/StickyMenu";
import Chiffres from "./components/Chiffres";
import Verticaux from "./components/Verticaux";
import Filiales from "./components/Filiales";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main>
      <StickyMenu />
      <HeroSection />
      <President />
      <Chiffres />
      <Filiales />
      <ContactSection />
      <Footer />
    </main>
  );
}