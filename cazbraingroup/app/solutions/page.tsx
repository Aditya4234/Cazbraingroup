import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";

export default function SolutionsPage() {
    return (
        <>
            <section className="section bg-muted/30 pt-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Industry-specific solutions designed to transform your business.
                    </p>
                </div>
            </section>
            <Industries />
            <WhyChooseUs />
            <Contact />
        </>
    );
}
