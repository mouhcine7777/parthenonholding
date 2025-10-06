"use client";
import StickyMenu from "../components/StickyMenu";
import FilialesHero from "./components/FilialesHero";
import NosfillialesSection from "./components/NosfillialesSection";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <main>
      <StickyMenu />
      <FilialesHero/>
      <NosfillialesSection />
      <Footer />
    </main>
  );
}