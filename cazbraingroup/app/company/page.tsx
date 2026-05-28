import { Clients } from "@/components/sections/Clients";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function CompanyPage() {
    return (
        <>
            <section className="section bg-muted/30 pt-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About CazBrainGroup</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A leading software development company delivering innovation since inception.
                    </p>
                </div>
            </section>
            <Clients />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
        </>
    );
}
