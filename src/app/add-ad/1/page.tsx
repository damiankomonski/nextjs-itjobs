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

export default function AddAd(){
    const cities: select_option[] = [
        {value: "warszawa", label: "Warszawa"},
        {value: "krakow", label: "Kraków"}
    ];

    const experience_options: select_option[] = [
        {value: "junior", label: "Junior"},
        {value: "mid", label: "Mid"}
    ];

    const wymiar_pracy_options: select_option[] = [
        {value: "pelny-etat", label: "Pełny etat"},
        {value: "pol-etatu", label: "Pół etatu"}
    ];

    const rodzaj_umowy_options: select_option[] = [
        {value: "umowa-o-prace", label: "Umowa o pracę"},
        {value: "b2b", label: "B2B"}
    ];

    const miejsce_pracy_options: select_option[] = [
        {value: "na-miejscu", label: "Na miejscu"},
        {value: "hybrydowo", label: "Hybrydowo"}, 
        {value: "zdalnie", label: "Zdalnie"}
    ];

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
                                            <label className="w-full mb-2 block text-black">Kategoria</label>
                                            <RadioGroup defaultValue="option-one">
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="javascript" id="javascript" />
                                                    <Label htmlFor="javascript" className="text-base">Javascript</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="java" id="java" />
                                                    <Label htmlFor="java" className="text-base">Java</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="python" id="python" />
                                                    <Label htmlFor="python" className="text-base">Python</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        {/* <h2 className="h5">Dane</h2> */}

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Nazwa stanowiska</label>
                                            <input type="text" className="w-full border border-2 border-black py-[.625rem] px-3 focus:outline-none focus:border-black" placeholder="Nazwa stanowiska" onChange={() => {}} />
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Lokalizacja</label>
                                            <Select
                                                className="focus:outline-none focus:border-black"
                                                classNamePrefix="select"
                                                isMulti
                                                isClearable
                                                isSearchable
                                                placeholder={"Lokalizacja"}
                                                name="city_id"
                                                options={cities}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Wymiar pracy</label>
                                            <Select
                                                className="focus:outline-none focus:border-black"
                                                classNamePrefix="select"
                                                isClearable
                                                isSearchable
                                                placeholder={"Wymiary pracy"}
                                                name="wymiar_pracy"
                                                options={wymiar_pracy_options}
                                            />
{/* 
                                            <RadioGroup defaultValue="option-one">
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="pelny-etat" id="pelny-etat" />
                                                    <Label htmlFor="pelny-etat" className="text-base">Pełny etat</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="pol-etatu" id="pol-etatu" />
                                                    <Label htmlFor="pol-etatu" className="text-base">Pół etatu</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="freelance" id="freelance" />
                                                    <Label htmlFor="freelance" className="text-base">Freelance</Label>
                                                </div>
                                            </RadioGroup> */}
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Doświadczenie</label>
                                            <Select
                                                className="focus:outline-none focus:border-black"
                                                classNamePrefix="select"
                                                isMulti
                                                isClearable
                                                isSearchable
                                                placeholder={"Doświadczenie"}
                                                name="experience_id"
                                                options={experience_options}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Rodzaj umowy</label>
                                            <Select
                                                className="focus:outline-none focus:border-black"
                                                classNamePrefix="select"
                                                isMulti
                                                isClearable
                                                isSearchable
                                                placeholder={"Rodzaj umowy"}
                                                name="rodzaj_umowy"
                                                options={rodzaj_umowy_options}
                                            />
                                            {/* <FieldGroup className="gap-3">
                                                <Field orientation="horizontal">
                                                    <Checkbox id="umowa-o-prace" name="umowa-o-prace" />
                                                    <FieldLabel htmlFor="umowa-o-prace" className="font-normal">Umowa o pracę</FieldLabel>
                                                </Field>
                                                
                                                <Field orientation="horizontal">
                                                    <Checkbox id="b2b" name="b2b" />
                                                    <FieldLabel htmlFor="b2b" className="font-normal">B2B</FieldLabel>
                                                </Field>

                                                <Field orientation="horizontal">
                                                    <Checkbox id="umowa-zlecenie" name="umowa-zlecenie" />
                                                    <FieldLabel htmlFor="umowa-zlecenie" className="font-normal">Umowa zlecenie</FieldLabel>
                                                </Field>
                                            </FieldGroup> */}
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Miejsce pracy</label>
                                            <Select
                                                className="focus:outline-none focus:border-black"
                                                classNamePrefix="select"
                                                isMulti
                                                isClearable
                                                isSearchable
                                                placeholder={"Miejsce pracy"}
                                                name="miejsce_pracy"
                                                options={miejsce_pracy_options}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Wynagrodzenie</label>
                                            <input type="text" className="border border-2 border-black py-[.625rem] px-3 focus:outline-none focus:border-black" placeholder="Od" onChange={() => {}} />
                                            <span className="inline-block px-4">-</span>
                                            <input type="text" className="border border-2 border-black py-[.625rem] px-3 focus:outline-none focus:border-black" placeholder="Do" onChange={() => {}} />
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Technologie</label>
                                            <Select
                                                className="focus:outline-none focus:border-black"
                                                classNamePrefix="select"
                                                isMulti
                                                isClearable
                                                isSearchable
                                                placeholder={"Technologie"}
                                                name="miejsce_pracy"
                                                options={miejsce_pracy_options}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Opis</label>
                                            wyiswg editor
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Proces rekrutacji</label>
                                            
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button type="submit" className="btn btn-primary">Dodaj ogłoszenie</button>
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