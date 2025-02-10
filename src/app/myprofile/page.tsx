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

export default function MyProfile(){
    const cities: select_option[] = [
        {value: "warszawa", label: "Warszawa"},
        {value: "krakow", label: "Kraków"}
    ];

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-6">
                        <aside className="col-span-full md:col-span-3 mb-8">
                            <nav className="mt-8">
                                <ul className="list-profile-nav">
                                    <li><Link href="/myprofile">Profil</Link></li>
                                    <li><Link href="/payments">Płatności</Link></li>
                                    <li><Link href="/settings">Ustawienia</Link></li>
                                    <li><Link href="/dataexport">Eksport danych</Link></li>
                                </ul>
                            </nav>
                        </aside>     
                        <section className="col-span-full md:col-span-9">
                            <h1 className="h2 mt-4 block">Profil</h1>
                            <div className="flex py-8">
                                <img src={undefined} alt="" className="w-[64px] h-[64px] bg-gray-100 rounded-full" />
                                <div className="ms-6">
                                    <h3 className="h5 !mb-1">Allegro</h3>
                                    <p className="text-sm text-gray-500">Warszawa, Mazowieckie</p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <div className="mb-4">
                                    <p className="mb-2">Adres email</p>
                                    <p className="mb-6">allegro@allegro.pl</p>
                                </div>
                                <form action="">
                                    <div className="mb-3">
                                        <label className="w-full mb-2 block text-black">Nazwa firmy</label>
                                        <input className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="w-full mb-2 block text-black">Miejscowość</label>
                                        <Select
                                            className="focus:outline-none focus:border-black"
                                            classNamePrefix="select"
                                            isClearable
                                            isSearchable
                                            placeholder={""}
                                            name="city_id"
                                            options={cities}
                                            onChange={(e) => {}} 
                                        />
                                    </div>
                                    <div className="col-span-full mt-4">
                                        <button className="bg-black text-white py-3 px-8 font-semibold" type="submit">Zapisz</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h2 className="h5">Dane do płatności</h2>

                                <form action="">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="col-span-full mb-3">
                                            <label className="w-full mb-2 block text-black">Nazwa firmy</label>
                                            <input type="text" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full md:col-span-6 mb-3">
                                            <label className="w-full mb-2 block text-black">Imię</label>
                                            <input type="text" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full md:col-span-6 mb-3">
                                            <label className="w-full mb-2 block text-black">Nazwisko</label>
                                            <input type="text" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full mb-3">
                                            <label className="w-full mb-2 block text-black">Adres siedziby</label>
                                            <input type="text" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full md:col-span-3 mb-3">
                                            <label className="w-full mb-2 block text-black">Kod pocztowy</label>
                                            <input type="number" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full md:col-span-9 mb-3">
                                            <label className="w-full mb-2 block text-black">Miejscowość</label>
                                            <input type="text" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full md:col-span-6 mb-3">
                                            <label className="w-full mb-2 block text-black">NIP</label>
                                            <input type="number" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full md:col-span-6 mb-3">
                                            <label className="w-full mb-2 block text-black">REGON</label>
                                            <input type="number" className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="" />
                                        </div>
                                        <div className="col-span-full mt-4">
                                            <button className="bg-black text-white py-3 px-8 font-semibold" type="submit">Zapisz</button>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </section> 
                    </div>
                </div>
            </main>
        </>
    )
}