import Header from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function ArtykulPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-4">
                                <Link
                                    href="/artykuly"
                                    className="mb-6 inline-flex items-center gap-2 text-black"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Wróć do artykułów
                                </Link>

                                <p className="mb-2 text-sm font-medium text-gray-500">
                                    {post.category}
                                </p>

                                <h1 className="h2 mt-2 mb-4">{post.title}</h1>

                                <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <CalendarDays className="h-4 w-4" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <div className="pt-2">
                                    {post.content.map((paragraph) => (
                                        <p key={paragraph} className="mb-4 text-black last:mb-0">
                                            {paragraph}
                                        </p>
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
