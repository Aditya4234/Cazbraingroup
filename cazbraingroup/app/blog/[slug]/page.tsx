import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | CazBrainGroup Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <section className="section bg-muted/30 pt-32">
        <div className="container">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 bg-[var(--primary)] text-white rounded-full text-xs">{post.category}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-3 text-muted-foreground">
              <User size={18} /> <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <article className="prose prose-lg max-w-none">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace("## ", "")}</h2>
                }
                if (line.startsWith("- ")) {
                  return <li key={i} className="text-muted-foreground ml-4">{line.replace("- ", "")}</li>
                }
                if (line.trim() === "") {
                  return <div key={i} className="h-4" />
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{line}</p>
              })}
            </article>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us to discuss how we can help with your software development needs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
