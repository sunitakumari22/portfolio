
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AiChat from "@/ai/aiChat";
import { useState, useRef, useEffect } from "react";

const Index = () => {
    const [aiOpen, setAiOpen] = useState(false);
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar onAiClick={() => setAiOpen(true)} />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
          <AiChat isOpen={aiOpen} setIsOpen={setAiOpen} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
