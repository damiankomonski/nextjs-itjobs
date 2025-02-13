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

export default function DataExport(){
    return (
        <>
            <Header />
            <main>
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
                        <section className="col-span-full md:col-span-9">
                            <h1 className="h2 mt-4 block">Eksport danych</h1>
                            <p className="mb-8">Jezeli chcesz wyeksportowac swoje dane ktore przechowuje aplikacja, kliknij ponizej. Otrzymasz email z danymi.</p>
                            <button className="bg-black text-white py-3 px-8 font-semibold">Wyeksportuj dane</button>
                        </section> 
                    </div>
                </div>
            </main>
        </>
    )
}