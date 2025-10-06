"use client";
import StickyMenu from "../components/StickyMenu";
import ExpertisesHero from "./components/ExpertisesHero";
import ExpertisesSection from "./components/ExpertisesSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <StickyMenu />
      <ExpertisesHero />
      <ExpertisesSection />
      <Footer />
    </main>
  );
}