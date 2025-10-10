"use client";
import StickyMenu from "../components/StickyMenu";
import NosverticauxHero from "./components/NosverticauxHero";
import Nosverticaux from "./components/Nosverticaux";
import Nosverticaux2 from "./components/Nosverticaux2";
import Nosverticaux3 from "./components/Nosverticaux3";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <NosverticauxHero />
      <Nosverticaux2 />
      <Footer />
    </main>
  );
}