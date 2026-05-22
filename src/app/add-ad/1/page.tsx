"use client"

import { useState } from "react";
import Header from "@/components/Header";
import Tiptap from "@/components/Tiptap";
import { Database, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Select from 'react-select';

type select_option = {
    value: string,
    label: string
}

// Dodać 

export default function AddAd1(){
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

    const category_options: { id: string; label: string }[] = [
        { id: "backend", label: "Backend" },
        { id: "frontend", label: "Frontend" },
        { id: "fullstack", label: "Fullstack" },
        { id: "devops", label: "DevOps" },
        { id: "mobile", label: "Mobile" },
        { id: "data", label: "Data / AI" },
    ];

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [editorContent, setEditorContent] = useState('');
    const [recruitmentSteps, setRecruitmentSteps] = useState<string[]>(['']);
    const [salaryValues, setSalaryValues] = useState([0, 50000]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleEditorChange = (content: string) => {
        setEditorContent(content);
    };

    const handleAddRecruitmentStep = () => {
        setRecruitmentSteps((prev) => [...prev, '']);
    };

    const handleRecruitmentStepChange = (index: number, value: string) => {
        setRecruitmentSteps((prev) => {
            const next = [...prev];
            next[index] = value;
            return next;
        });
    };

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-4">
                                <h1 className="h2 mt-4">Dodaj ogłoszenie</h1>
                            </div> 

                            <div className="col-span-full lg:col-span-8 lg:col-start-3">
                                <form action="">
                                    <div className="mb-4">
                                        <p className="w-full mb-2 block text-black">Kategoria</p>

                                        <div
                                            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8"
                                            role="radiogroup"
                                            aria-label="Kategoria"
                                        >
                                            {category_options.map(({ id, label }) => {
                                                const selected = selectedCategory === id;
                                                return (
                                                    <div
                                                        key={id}
                                                        className={cn(
                                                            "flex relative w-full items-center gap-3 border-2 border-grey-500 transition-colors",
                                                            selected && "border-black"
                                                        )}
                                                    >
                                                        <label
                                                            htmlFor={`category-${id}`}
                                                            className="block w-full hover:cursor-pointer"
                                                        >

                                                            <input
                                                                type="radio"
                                                                name="category"
                                                                value={id}
                                                                id={`category-${id}`}
                                                                checked={selected}
                                                                onChange={() => setSelectedCategory(id)}
                                                                className={cn(
                                                                    "h-4 w-4 shrink-0 cursor-pointer absolute top-2 right-2"
                                                                )}
                                                            />

                                                            <div className="px-2 py-2">
                                                                <Database className="w-6 h-6" />
                                                            </div>
                                                        
                                                            <span className="py-2 px-2 block">{label}</span>
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Nazwa stanowiska</label>
                                            <input type="text" className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black" placeholder="Nazwa stanowiska" onChange={() => {}} />
                                        </div>

                                        <div className="md:mb-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                            <div className="mb-3 md:mb-0">
                                                <label className="w-full mb-2 block text-black">Lokalizacja</label>
                                                <Select
                                                    className="react-select-height focus:outline-none focus:border-black"
                                                    classNamePrefix="select"
                                                    isMulti
                                                    isClearable
                                                    isSearchable
                                                    placeholder={"Lokalizacja"}
                                                    name="city_id"
                                                    options={cities}
                                                />
                                            </div>
                                            <div className="mb-3 md:mb-0">
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
                                            </div>
                                        </div>

                                        <div className="md:mb-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                            <div className="mb-3 md:mb-0">
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
                                            <div className="mb-3 md:mb-0">
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
                                            </div>
                                        </div>

                                        <div className="md:mb-3 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                            <div className="mb-3 md:mb-0">
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
                                            
                                            <div className="mb-3 md:mb-0">
                                                <label className="w-full mb-2 block text-black">Wynagrodzenie</label>

                                                <div className="flex items-center gap-3">
                                                    <div className="relative min-w-0 w-full">
                                                        <input type="text" className="w-full border border-2 border-black py-2 pl-3 pr-7 focus:outline-none focus:border-black" placeholder="Od" onChange={() => {}} />
                                                        <span className="absolute right-3 top-1/2 -translate-y-1/2">zł</span>
                                                    </div>
                                                    <span>-</span>
                                                    <div className="relative min-w-0 w-full">
                                                        <input type="text" className="w-full border border-2 border-black py-2 pl-3 pr-7 focus:outline-none focus:border-black" placeholder="Do" onChange={() => {}} />
                                                        <span className="absolute right-3 top-1/2 -translate-y-1/2">zł</span>
                                                    </div>
                                                </div>

                                                <span className="text-sm text-grey-500 mt-2 block">Podaj wynagrodzenie miesięczne brutto.</span>
                                            </div>
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
                                            <Tiptap />
                                        </div>

                                        <div className="mb-3">
                                            <label className="w-full mb-2 block text-black">Proces rekrutacji</label>
                                            <div className="space-y-2">
                                                {recruitmentSteps.map((step, index) => (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        className="w-full border border-2 border-black py-2 px-3 focus:outline-none focus:border-black"
                                                        placeholder={`Krok ${index + 1}`}
                                                        value={step}
                                                        onChange={(e) =>
                                                            handleRecruitmentStepChange(index, e.target.value)
                                                        }
                                                    />
                                                ))}
                                            </div>

                                            <button type="button" onClick={handleAddRecruitmentStep} className="mt-4 font-bold text-black flex items-center"><Plus className="mr-2" /> Dodaj krok</button>
                                        </div>
                                    </div>

                                    <div className="my-8">
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