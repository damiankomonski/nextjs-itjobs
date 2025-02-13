"use client"

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

export default function MyAds(){
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-6">
                        <section className="col-span-full md:col-span-9 mb-4">
                            <h1 className="h2 mt-4">Moje ogłoszenia</h1>
                        </section> 
                        <section className="col-span-full md:col-span-full">
                            <Tabs defaultValue="active" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 h-auto">
                                    <TabsTrigger value="active" className="text-base">Aktywne (2)</TabsTrigger>
                                    <TabsTrigger value="unactive" className="text-base">Nieaktywne (0)</TabsTrigger>
                                </TabsList>
                                <TabsContent value="active">
                                    <div className="border border-1 border-gray-100 rounded-lg py-4 px-6 w-full relative">
                                        <div className="flex justify-between">
                                            <div>
                                                <h2 className="h4 !mb-0">Front End Engineer</h2>
                                                <div className="flex">
                                                    <p className="text-[15px] me-8">Typescript</p>
                                                    <p className="text-[15px] me-8">Warszawa, Mazowieckie</p>
                                                    <p className="text-[15px] me-8">Aktywne do 7 Luty 2025</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[24px] mt-2 mb-0">12000 - 14000 PLN</p>
                                            </div>
                                        </div>
                                        <div className="mb-8">
                                            <p className="mb-1">Odwiedzin: 67856</p>
                                            <p className="mb-1">Ilość aplikacji: 67856</p>
                                            <p className="mb-1">Ilość aplikacji: 67856</p>
                                        </div>
                                        <div className="my-4">
                                            <Link href="" className="border border-2 border-black text-black py-3 px-8 font-semibold">Przeglądaj aplikacje</Link>
                                            <Link href="" className="underline inline-block ms-8">Edytuj</Link>
                                            <Link href="" className="underline inline-block ms-8">Zakończ</Link>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="unactive">
                                    <p>Brak</p>
                                </TabsContent>
                            </Tabs>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}