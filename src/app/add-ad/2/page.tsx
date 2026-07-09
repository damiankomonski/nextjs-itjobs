"use client"

import { useState } from "react";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { Database, CircleCheck } from "lucide-react";

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
                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-4">
                                <h1 className="h2 mt-4">Dodaj ogłoszenie</h1>
                            </div> 

                            <div className="col-span-full lg:col-span-8 lg:col-start-3 mb-4">
                                <form action="">
                                    <div className="flex gap-x-6">
                                        <div className="flex-1">
                                            <div className={cn("flex relative w-full items-center gap-3 border-2 border-grey-500 transition-colors")}>
                                                <label htmlFor={`category-1`} className="block w-full hover:cursor-pointer">

                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value={"1"}
                                                        id={`category-1`}
                                                        onChange={() => {}}
                                                        className={cn(
                                                            "h-4 w-4 shrink-0 cursor-pointer absolute top-2 right-2"
                                                        )}
                                                    />
                                                    <div className="p-4">
                                                        <h3 className="text-2xl text-black mb-2">Pakiet Start</h3>
                                                        <p>Czas trwania 30 dni</p>

                                                        <ul>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                        </ul>

                                                        <p className="text-3xl mt-6 mb-0 text-black">79<span className="text-[18px]">99</span> <span className="text-[24px]">zł</span> <span className="!text-[16px] !text-gray-500">brutto</span></p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <div className={cn("flex relative w-full items-center gap-3 border-2 border-grey-500 transition-colors")}>
                                                <label htmlFor={`category-1`} className="block w-full hover:cursor-pointer">

                                                    <input
                                                        type="radio"
                                                        name="category"
                                                        value={"1"}
                                                        id={`category-1`}
                                                        onChange={() => {}}
                                                        className={cn(
                                                            "h-4 w-4 shrink-0 cursor-pointer absolute top-2 right-2"
                                                        )}
                                                    />
                                                    <div className="p-4">
                                                        <h3 className="text-2xl text-black mb-2">Pakiet Premium</h3>
                                                        <p>Czas trwania 90 dni</p>

                                                        <ul>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                            <li className="flex mb-2"><CircleCheck className="me-2 mt-0.5" /> Ogłoszenie wazne 30 dni</li>
                                                        </ul>

                                                        <p className="text-3xl mt-6 mb-0 text-black">99<span className="text-[18px]">99</span> <span className="text-[24px]">zł</span> <span className="!text-[16px] !text-gray-500">brutto</span></p>
                                                    </div>
                                                </label>
                                            </div>
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