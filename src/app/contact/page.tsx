"use client";
import StickyMenu from "../components/StickyMenu";
import ContactHero from "./components/ContactHero";
import ContactPage from "./components/ContactPage";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <main>
      <StickyMenu />
      <ContactHero />
      <ContactPage />
      <Footer />
    </main>
  );
}