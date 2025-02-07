import Header from "@/components/Header";
import Link from "next/link";

export default function MyProfile(){
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-6">
                        <aside className="col-span-3">
                            <nav className="mt-8">
                                <ul className="list-profile-nav">
                                    <li><Link href="/myprofile" className="font-bold">Profil</Link></li>
                                    <li><Link href="/settings">Ustawienia</Link></li>
                                    <li><Link href="/dataexport">Eksport danych</Link></li>
                                </ul>
                            </nav>
                        </aside>     
                        <section className="col-span-9">
                            <h1 className="h3 mt-4 mb-20 block">Profil</h1>
                            <div className="flex">
                                <img src={null} alt="" className="w-[64px] h-[64px] bg-gray-100 rounded-full" />
                                <div className="ms-6">
                                    <h2 className="h5 !mb-1">Allegro</h2>
                                    <p className="text-sm text-gray-500">Warszawa, Mazowieckie</p>
                                </div>
                            </div>
                        </section> 
                    </div>
                </div>
            </main>
        </>
    )
}