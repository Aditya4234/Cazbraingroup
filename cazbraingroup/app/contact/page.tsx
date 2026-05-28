import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <>
            <section className="section bg-muted/30 pt-32">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to start your project? Get in touch with us today.
                    </p>
                </div>
            </section>
            <Contact />
        </>
    );
}
