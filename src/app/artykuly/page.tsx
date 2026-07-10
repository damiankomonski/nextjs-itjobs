import Header from "@/components/Header";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export default function ArtykulyPage() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-4">
                                <h1 className="h2 mt-4">Artykuły</h1>
                            </div>

                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    {blogPosts.map((post) => (
                                        <article
                                            key={post.slug}
                                            className="flex h-full flex-col border-2 border-gray-100 p-4 md:p-6"
                                        >
                                            <p className="mb-2 text-sm font-medium text-gray-500">
                                                {post.category}
                                            </p>

                                            <h2 className="h4 mb-2">
                                                <Link
                                                    href={`/artykuly/${post.slug}`}
                                                    className="text-black"
                                                >
                                                    {post.title}
                                                </Link>
                                            </h2>

                                            <p className="mb-4 flex-1 text-black">{post.excerpt}</p>

                                            <div className="mt-auto flex flex-wrap gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-2">
                                                    <CalendarDays className="h-4 w-4" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
