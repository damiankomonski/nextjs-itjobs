import Header from "@/components/Header";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

export default function AddAdSuccess() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full lg:col-span-8 lg:col-start-3 py-8">
                                <div className="p-6 md:p-8 text-center">
                                    <CircleCheck className="mx-auto mb-8 h-16 w-16 text-black" strokeWidth={1} />

                                    <h1 className="h3 mb-3">Ogłoszenie zostało dodane</h1>

                                    <p className="mb-8 text-black">
                                        Dziękujemy! Twoje ogłoszenie zostało dodane i jest w trakcie sprawdzania. Poinformujemy Cię o jego akceptacji.
                                    </p>

                                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                                        <Link href="/my-ads" className="btn btn-primary">
                                            Moje ogłoszenia
                                        </Link>
                                        <Link href="/" className="btn btn-secondary">
                                            Strona główna
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
