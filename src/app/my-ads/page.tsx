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

export default function MyAds(){
    const [currentPage, setCurrentPage] = useState<number>(0);

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full md:col-span-9 mb-4">
                                <h1 className="h2 mt-4">Moje ogłoszenia</h1>
                            </div> 
                            <div className="col-span-full md:col-span-full">
                                <Tabs defaultValue="active" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 h-auto mb-4">
                                        <TabsTrigger value="active" className="text-base">Aktywne (2)</TabsTrigger>
                                        <TabsTrigger value="unactive" className="text-base">Nieaktywne (0)</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="active">
                                        <article className="border border-1 border-gray-100 rounded-lg py-4 px-6 w-full relative mb-4">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h2 className="h4 !mb-2"><Link href="/my-ads/asj239857sjfdh">Front End Engineer</Link></h2>
                                                    <div className="flex">
                                                        <p className="text-[15px] me-4 flex"><ChartBarStacked className="me-2" /> Javascript</p>
                                                        <p className="text-[15px] me-4 flex"><MapPin className="me-2" /> Warszawa, Mazowieckie</p>
                                                        <p className="text-[15px] me-4 flex"><CalendarDays className="me-2" /> Aktywne do 7 Luty 2025</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[20px] mt-2 mb-0">12000 - 14000 PLN</p>
                                                </div>
                                            </div>
                                            <div className="mb-8">
                                                <p className="mb-1">Odwiedzin: 67856</p>
                                                <p className="mb-1">Ilość aplikacji: 67856</p>
                                            </div>
                                            <div className="my-4">
                                                <Link href="/my-ads/asajahsf712347" className="border border-2 border-black text-black py-3 px-8 font-semibold">Przeglądaj aplikacje</Link>
                                                <Link href="" className="underline inline-block ms-8">Edytuj</Link>
                                                <Link href="" className="underline inline-block ms-8" onClick={(e) => {e.preventDefault();}}>Zakończ</Link>
                                            </div>
                                        </article>

                                        <div className="flex justify-center my-8">
                                            <ReactPaginate
                                                nextLabel={"Następna"}
                                                // value={currentPage}
                                                onPageChange={(a) => {
                                                    setCurrentPage(a.selected);
                                                }}
                                                initialPage={currentPage}
                                                pageRangeDisplayed={2}
                                                marginPagesDisplayed={1}
                                                pageCount={24}
                                                previousLabel={"Poprzednia"}
                                                pageClassName="page-item"
                                                pageLinkClassName="page-link"
                                                previousClassName="link-previous"
                                                previousLinkClassName="link-previous-link"
                                                nextClassName="link-next"
                                                nextLinkClassName="link-next-link"
                                                breakLabel="..."
                                                breakClassName="page-item"
                                                breakLinkClassName="page-link"
                                                containerClassName="pagination"
                                                activeClassName="active"
                                                renderOnZeroPageCount={null}
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="unactive">
                                        <p>Brak</p>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}