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
                            <div className="col-span-full md:col-span-full">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}