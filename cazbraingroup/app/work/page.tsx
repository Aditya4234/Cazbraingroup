import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function WorkPage() {
    return (
        <>
            <section className="section bg-muted/30 pt-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        450+ projects delivered across web, mobile, and software.
                    </p>
                </div>
            </section>
            <CaseStudies />
            <Process />
            <Contact />
        </>
    );
}
