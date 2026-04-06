"use client"

import Header from "@/components/Header";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Select from "react-select";

type select_option = {
    value: string,
    label: string
}

export default function Settings(){
    const cities: select_option[] = [
        {value: "warszawa", label: "Warszawa"},
        {value: "krakow", label: "Kraków"}
    ];

    return (
        <>
            <Header /> 
            <div className="container">
                <div className="grid grid-cols-12 gap-x-6">
                    <aside className="col-span-full md:col-span-3 mb-8">
                        <h3 className="text-[.8125rem] uppercase text-gray-500 mt-4 mb-0 tracking-widest">Menu</h3>
                        <nav className="">
                            <ul className="list-profile-nav">
                                <li><Link href="/my-profile">Profil</Link></li>
                                <li><Link href="/payments">Płatności</Link></li>
                                <li><Link href="/settings">Ustawienia</Link></li>
                                <li><Link href="/data-export">Eksport danych</Link></li>
                            </ul>
                        </nav>
                    </aside>      
                    <main className="col-span-full md:col-span-9">
                        <h1 className="h2 mt-4 block">Ustawienia</h1>
                        <section className="mb-12">
                            <h2 className="h4">Dane do płatności</h2>
                            <form action="">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="col-span-full mb-3">
                                        <label className="w-full mb-2 block text-black">Nazwa firmy</label>
                                        <input type="text" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full md:col-span-6 mb-3">
                                        <label className="w-full mb-2 block text-black">Imię</label>
                                        <input type="text" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full md:col-span-6 mb-3">
                                        <label className="w-full mb-2 block text-black">Nazwisko</label>
                                        <input type="text" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full mb-3">
                                        <label className="w-full mb-2 block text-black">Adres siedziby</label>
                                        <input type="text" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full md:col-span-3 mb-3">
                                        <label className="w-full mb-2 block text-black">Kod pocztowy</label>
                                        <input type="number" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full md:col-span-9 mb-3">
                                        <label className="w-full mb-2 block text-black">Miejscowość</label>
                                        <input type="text" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full md:col-span-6 mb-3">
                                        <label className="w-full mb-2 block text-black">NIP</label>
                                        <input type="number" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full md:col-span-6 mb-3">
                                        <label className="w-full mb-2 block text-black">REGON</label>
                                        <input type="number" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="col-span-full mt-4">
                                        <button className="btn btn-primary" type="submit">Zapisz</button>
                                    </div>
                                </div>
                            </form>
                        </section>

                        <section className="mb-12">
                            <h2 className="h4">Zmiana hasła</h2>
                            <form action="">
                                <div className="mb-3">
                                    <label className="w-full mb-2 block text-black">Aktualne hasło</label>
                                    <input className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label className="w-full mb-2 block text-black">Nowe hasło</label>
                                    <input className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label className="w-full mb-2 block text-black">Powtórz hasło</label>
                                    <input className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="" />
                                </div>
                                <div className="col-span-full mt-4">
                                    <button className="btn btn-primary" type="submit">Zmień hasło</button>
                                </div>
                            </form>
                        </section>

                        <div className="border-t border-t-gray-100 py-4"></div>

                        <section className="mb-12">
                            <h2 className="h5">Usuwanie konta</h2>
                            <p className="mb-8">Jeżeli podjąłeś decyzję ze chcesz usunąć konto w JobJob, możesz to zrobić klikając w przycisk poniżej. Wszystkie dane zostaną usunięte.</p>
                            <button className="border border-2 border-error-500 text-error-500 py-2 px-6 font-semibold">Usuń konto</button>
                        </section>
                    </main> 
                </div>
            </div>
            
        </>
    )
}