import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Insights } from "@/components/sections/Insights";
import { Testimonials } from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/Contact"
export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Industries />
      <TechStack />
      <CaseStudies />
      <WhyChooseUs />
      <Process />
      <Insights />
      <Testimonials />
      <ContactForm />
    </>
  );
}
