import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blog"
import { Calendar, Clock, ArrowRight } from "lucide-react"

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

            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="relative aspect-[16/9]">
                                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                            <span className="px-2 py-1 bg-[var(--primary)] text-white rounded-full text-[10px]">{post.category}</span>
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                                            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                        </div>
                                        <h2 className="font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{post.title}</h2>
                                        <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                                        <span className="inline-flex items-center gap-1 text-sm text-[var(--primary)] font-medium mt-4 group-hover:gap-2 transition-all">
                                            Read More <ArrowRight size={14} />
                                        </span>
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
