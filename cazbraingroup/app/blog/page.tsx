import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";

export default function BlogPage() {
    return (
        <>
            <section className="section bg-muted/30 pt-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Insights, articles, and updates from the CazBrainGroup team.
                    </p>
                </div>
            </section>
            <Insights />
            <Contact />
        </>
    );
}
