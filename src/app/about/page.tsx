"use client";
import StickyMenu from "../components/StickyMenu";
import AboutHerosection from "./components/AboutHerosection";
import AboutSection from "./components/AboutSection";
import Footer from "../components/Footer";
import AIassistant from "../components/AIassistant";



export default function Home() {
  return (
    <main>
      <StickyMenu />
      <AboutHerosection />
      <AboutSection />
      <AIassistant />
      <Footer />
    </main>
  );
}