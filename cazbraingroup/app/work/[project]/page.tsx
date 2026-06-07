import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { caseStudies } from "@/data/caseStudies"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export function generateStaticParams() {
  return caseStudies.map((project) => ({
    project: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }) {
  const { project: projectSlug } = await params
  const project = caseStudies.find((c) => c.slug === projectSlug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | CazBrainGroup Case Study`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project: projectSlug } = await params
  const project = caseStudies.find((c) => c.slug === projectSlug)
  if (!project) notFound()

  return (
    <>
      <section className="section bg-muted/30 pt-32">
        <div className="container">
          <Link href="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={18} /> Back to Work
          </Link>
          <div className="max-w-3xl">
            <div className="flex gap-3 mb-4">
              <span className="text-sm px-3 py-1 bg-[var(--primary)] text-white rounded-full">{project.industry}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground">Client: {project.client}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.fullDescription}</p>
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                  <CheckCircle2 className="text-[var(--primary)] mt-1 shrink-0" size={20} />
                  <span className="text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-background border rounded-md text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Want Similar Results?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let us help you build a solution that transforms your business.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}
