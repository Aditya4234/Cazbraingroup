import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function TechnologyPage() {
    return (
        <>
            <section className="section bg-muted/30 pt-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Cutting-edge technologies powering our solutions.
                    </p>
                </div>
            </section>
            <TechStack />
            <Contact />
        </>
    );
}
