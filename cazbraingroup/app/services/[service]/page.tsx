import { notFound } from "next/navigation"
import Link from "next/link"
import { services } from "@/data/services"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceId } = await params
  const service = services.find((s) => s.id === serviceId)
  if (!service) return { title: "Service Not Found" }
  return {
    title: `${service.title} | CazBrainGroup`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceId } = await params
  const service = services.find((s) => s.id === serviceId)
  if (!service) notFound()

  return (
    <>
      <section className="section bg-muted/30 pt-32">
        <div className="container">
          <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={18} /> Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground mb-2">{service.subtitle}</p>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{service.detailedDescription}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--primary)] mt-1 shrink-0" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-background border rounded-md text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let us help you build something amazing with our {service.title.toLowerCase()} expertise.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
