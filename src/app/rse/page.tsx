"use client";
import StickyMenu from "../components/StickyMenu";
import RseHero from "./components/RseHero";
import RseSection from "./components/RseSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <RseHero />
      <RseSection />
      <Footer />
    </main>
  );
}