import Link from "next/link"
import Image from "next/image"
import { caseStudies } from "@/data/caseStudies"
import { ArrowRight } from "lucide-react"

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

            <section className="section">
                <div className="container">
                    <div className="space-y-12">
                        {caseStudies.map((project, index) => (
                            <Link key={index} href={`/work/${project.slug}`} className="group block">
                                <article className="grid md:grid-cols-2 gap-8 items-center border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                        <span className="text-sm text-[var(--primary)] font-medium">{project.industry}</span>
                                        <h2 className="text-2xl font-bold mt-2 mb-3 group-hover:text-[var(--primary)] transition-colors">{project.title}</h2>
                                        <p className="text-muted-foreground mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-muted rounded">{tech}</span>
                                            ))}
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-[var(--primary)] font-medium group-hover:gap-3 transition-all">
                                            View Case Study <ArrowRight size={16} />
                                        </span>
                                    </div>
                                    <div className={`relative aspect-[4/3] rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
