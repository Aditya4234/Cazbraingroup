import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function ServicesPage() {
    return (
        <>
            <section className="section bg-muted/30 pt-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </div>
            </section>
            <Services />
            <Process />
            <Contact />
        </>
    );
}
