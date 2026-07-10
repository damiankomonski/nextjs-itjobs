import Header from "@/components/Header";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

const packages = [
    {
        name: "Pakiet Start",
        duration: "30 dni",
        price: "79",
        cents: "99",
        features: [
            "Ogłoszenie widoczne 30 dni",
            "Podstawowa widoczność na liście",
            "Edycja ogłoszenia w panelu",
        ],
    },
    {
        name: "Pakiet Premium",
        duration: "90 dni",
        price: "99",
        cents: "99",
        features: [
            "Ogłoszenie widoczne 90 dni",
            "Wyróżnienie na liście ofert",
            "Priorytetowa moderacja",
        ],
    },
];

export default function CennikPage() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-4">
                                <h1 className="h2 mt-4">Cennik</h1>
                            </div>

                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-8">
                                <div className="flex flex-col gap-6 md:flex-row">
                                    {packages.map((pkg) => (
                                        <div
                                            key={pkg.name}
                                            className="flex-1 border-2 border-gray-500 p-4"
                                        >
                                            <h2 className="text-2xl text-black mb-2">{pkg.name}</h2>
                                            <p className="mb-4">Czas trwania {pkg.duration}</p>

                                            <ul className="mb-6">
                                                {pkg.features.map((feature) => (
                                                    <li key={feature} className="flex mb-2">
                                                        <CircleCheck className="me-2 mt-0.5 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <p className="text-3xl mb-0 text-black">
                                                {pkg.price}
                                                <span className="text-[18px]">{"." + pkg.cents}</span>{" "}
                                                <span className="text-[24px]">zł</span>{" "}
                                                <span className="text-[16px] text-gray-500">brutto</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-8">
                                <Link href="/add-ad/1" className="btn btn-primary">
                                    Dodaj ogłoszenie
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
