"use client"

import React, { useEffect, useState } from "react";
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


type ParamsType = {
    adId: string
}

export default function MyAdsDetails({params}: {params: Promise<ParamsType>}){    
    const unwrappedParams = React.use(params);
    console.log(unwrappedParams.adId);

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-full md:col-span-9">
                                <Link href="/my-ads/" className="underline inline-block mb-4">Powrót do ogłoszeń</Link>
                                <h1 className="h2 mt-4 !mb-4">Front End Engineer</h1>
                            </div> 
                            <div className="col-span-full md:col-span-full mb-8">
                                <div className="flex">
                                    <p className="me-4">Javascript</p>
                                    <p className="me-4">Warszawa, Mazowieckie</p>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <h2 className="h4">376 złożonych aplikacji</h2>

                                <article className="border border-1 border-gray-100">

                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}