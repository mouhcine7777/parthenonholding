"use client";
import StickyMenu from "../components/StickyMenu";
import SavoirefaireHero from "./components/SavoirefaireHero";
import Savoirefaire from "./components/Savoirefaire";
import Footer from "../components/Footer";
import AIassistant from "../components/AIassistant";






export default function Home() {
  return (
    <main>
      <StickyMenu />
      <SavoirefaireHero />
      <Savoirefaire />
      <AIassistant />
      <Footer />
    </main>
  );
}