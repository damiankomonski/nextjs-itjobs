"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Select from "react-select";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
import ReactPaginate from 'react-paginate';
import {MapPin, CalendarDays, ChartBarStacked} from "lucide-react";

export default function AddAd(){
    const [currentPage, setCurrentPage] = useState<number>(0);

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full md:col-span-9 mb-4">
                                <h1 className="h2 mt-4">Dodaj ogłoszenie</h1>
                            </div> 
                            <div className="col-span-full md:col-span-8">
                                <div>
                                    <p className="w-full mb-2 block text-black">Kategoria</p>
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label className="">Adres email</label>
                                    </div>

                                    <label htmlFor="" className="">
                                        <input type="radio" name="radio" /> Radio
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className="w-full mb-2 block text-black">Adres email</label>
                                    <input className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="Adres email" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}