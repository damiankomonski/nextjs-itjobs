"use client"

import React, {useCallback} from "react";
import Link from "next/link";
import {useDropzone} from 'react-dropzone'
import Header from "@/components/Header";
import Dropzone from "@/components/Dropzone";

type ParamsType = {
    adId: string
}

export default function Page({params}: {params: Promise<ParamsType>}){
    const unwrappedParams = React.use(params);

    function sendResume(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    
        console.log(unwrappedParams.adId);
    }
    
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container grid grid-cols-12 gap-x-6">
                        <div className="col-span-full md:col-span-8 md:col-start-3 mt-6">
                            <h1 className="h3">Front End Engineer</h1>
                            <div className="flex">
                                <div className="me-6">
                                    <img src={undefined} alt="" />
                                    <p>Warszawa</p>
                                </div>
                                <div className="me-6">
                                    <img src={undefined} alt="" />
                                    <p>Allegro</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-sm mb-0">Wynagrodzenie</p>
                                <h2 className="h4">4000 - 6000zł <span className="text-[18px]">brutto</span></h2>
                                {/* <Link href="" className="btn btn-primary w-full mt-[-8px]">Aplikuj</Link> */}
                            </div>
                            <div className="mb-8 flex justify-between">
                                <div>
                                    <img src={undefined} alt="" />
                                    <p className="mb-1 text-sm">Wymiar pracy</p>
                                    <p className="text-[18px]">Pełny etat</p>
                                </div>
                                <div>
                                    <img src={undefined} alt="" />
                                    <p className="mb-1 text-sm">Doświadczenie</p>
                                    <p className="text-[18px]">Mid</p>
                                </div>
                                <div>
                                    <img src={undefined} alt="" />
                                    <p className="mb-1 text-sm">Rodzaj umowy</p>
                                    <p className="text-[18px]">Umowa o pracę, B2B</p>
                                </div>
                                <div>
                                    <img src={undefined} alt="" />
                                    <p className="mb-1 text-sm">Miejsce pracy</p>
                                    <p className="text-[18px]">Hybrydowo, Zdalnie</p>
                                </div>
                            </div>
                            <div className="mb-12">
                                <h2 className="h4">Technologie</h2>
                                <div>
                                    <span className="border border-gray-100 py-2 px-4 me-4">Typescript</span>
                                    <span className="border border-gray-100 py-2 px-4 me-4">Angular</span>
                                    <span className="border border-gray-100 py-2 px-4 me-4">Angular Material</span>
                                </div>
                            </div>
                            <div className="mt-12 mb-8">
                                <h4 className="h5">Wymagania</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies.</p>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies.</p>

                                <h4 className="h5">Pozostałe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies.</p>
                            </div>

                            <div className="mb-12">
                                <h2 className="h4">Proces rekrutacji</h2>
                                <ol className="list-ordered-2">
                                    <li>Rozmowa telefoniczna</li>
                                    <li>Spotkanie z HR</li>
                                    <li>Rozmowa techniczna</li>
                                    <li>Decyzja</li>
                                </ol>
                            </div>

                            <div className="mb-12">
                                <h2 className="h4">Aplikuj</h2>
                                <form action="" onSubmit={sendResume}>
                                    <div className="grid grid-cols-2 gap-x-6">
                                        <div className="col-span-full md:col-span-1">
                                            <div className="mb-3">
                                                <label className="w-full mb-2 block text-black">Imię</label>
                                                <input className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="Imię" />
                                            </div>
                                        </div>
                                        <div className="col-span-full md:col-span-1">
                                            <div className="mb-3">
                                                <label className="w-full mb-2 block text-black">Nazwisko</label>
                                                <input className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="Nazwisko" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="w-full mb-2 block text-black">Twoje CV</label>
                                        <Dropzone />
                                    </div>

                                    <button type="submit" className="w-full bg-black text-white py-3 font-semibold">Aplikuj</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}