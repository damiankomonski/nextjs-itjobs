"use client"

import Header from "@/components/Header";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Select from "react-select";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
  } from "@/components/ui/dialog";
import Dropzone from "@/components/Dropzone";
  

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
                            <h3 className="text-[13px] uppercase text-gray-500 mt-4 mb-0 tracking-widest">Menu</h3>
                            <nav className="">
                                <ul className="list-profile-nav">
                                    <li><Link href="/my-profile">Profil</Link></li>
                                    <li><Link href="/payments">Płatności</Link></li>
                                    <li><Link href="/settings">Ustawienia</Link></li>
                                    <li><Link href="/data-export">Eksport danych</Link></li>
                                </ul>
                            </nav>
                        </aside>
                        <section className="col-span-full md:col-span-9">
                            <h1 className="h2 mt-4 block">Profil</h1>
                            <div className="flex py-8">
                                <Dialog>
                                    <DialogTrigger><img src={undefined} alt="" className="w-[4rem] h-[4rem] bg-gray-100 rounded-full" /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edytuj zdjęcie profilowe</DialogTitle>
                                        </DialogHeader>
                                        <div>
                                            <p>Jezeli chcesz zmienić swoje zdjęcie profilowe, mozesz to zrobić ponizej.</p>
                                            <Dropzone />
                                        </div>
                                        <DialogFooter className="sm:justify-start">
                                            <button className="bg-black text-white py-3 px-8 font-semibold" type="submit">Zmień</button>
                                            <DialogClose asChild>
                                                <button className="border border-2 border-black text-black py-3 px-8 font-semibold" type="submit">Anuluj</button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                                <div className="ms-6">
                                    <h3 className="h5 !mb-1">Allegro</h3>
                                    <p className="text-sm text-gray-500">Warszawa, Mazowieckie</p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <div className="mb-4">
                                    <p className="mb-2">Adres email</p>
                                    <h4 className="h6 mb-6">allegro@allegro.pl</h4>
                                </div>
                                <form action="">
                                    <div className="mb-3">
                                        <label className="w-full mb-2 block text-black">Nazwa firmy</label>
                                        <input type="text" className="w-full border border-2 border-black py-[.625rem] px-3 focus:outline-none focus:border-black" placeholder="" value="Allegro" onChange={() => {}} />
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
                                            value={cities[0]}
                                        />
                                    </div>
                                    <div className="col-span-full mt-4">
                                        <button className="bg-black text-white py-3 px-8 font-semibold" type="submit">Zapisz</button>
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