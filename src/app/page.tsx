import AboutSection from "@/common/about";
import Testimonials from "@/common/clients";
import ContactSection from "@/common/contact";
import Footer from "@/common/footer";
import HeroSection from "@/common/herosection";
import HowWeHelp from "@/common/howwehelp";
import Navbar from "@/common/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      
      <Navbar />
      <HeroSection />
      <HowWeHelp />
      <Testimonials />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
