import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import FlagshipSystem from "@/components/FlagshipSystem";
import EngineeringApproach from "@/components/EngineeringApproach";
import SelectedSystems from "@/components/SelectedSystems";
import TechnicalNotes from "@/components/TechnicalNotes";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Capabilities />
        <FlagshipSystem />
        <EngineeringApproach />
        <SelectedSystems />
        <TechnicalNotes />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
