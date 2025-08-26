import Hero from "@/components/material/landing/service/Hero";
import OurService from "@/components/material/landing/service/OurService";
import HumanCentered from "@/components/material/landing/service/HumanCentered";
import ContactService from "@/components/material/landing/service/ContactService";

function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <OurService />
      <HumanCentered />
      <ContactService/>
    </div>
  );
}

export default AboutPage;
