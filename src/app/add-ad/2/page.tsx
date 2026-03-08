"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import Select from "react-select";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
import ReactPaginate from 'react-paginate';
import {MapPin, CalendarDays, ChartBarStacked} from "lucide-react";

type select_option = {
    value: string,
    label: string
}

export default function AddAd2(){
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
                                <form action="">
                                    <div className="mb-4">
                                        {/* <h2 className="h5">Kategoria</h2> */}

                                        <div className="">
                                            Wybór pakietu
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button type="submit" className="btn btn-primary">Zapłać</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}