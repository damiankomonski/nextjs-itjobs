"use client"

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Select from "react-select";
import ReactPaginate from 'react-paginate';
import { DataTable } from "./data-table";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


type ParamsType = {
    adId: string
}

type Resume = {
    id: string
    name: string
    surname: string
    email: string
    more: string
}

const resumes: Resume[] = [
    {
        id: "728ed52f",
        name: "Jan",
        surname: "Kowalski",
        email: "jankowalski@gmail.com"
    },
    {
        id: "489e1d42",
        name: "Renata",
        surname: "Bubu",
        email: "renata@gmail.com"
    }
];

const columns: ColumnDef<Resume>[] = [
    {
        accessorKey: "name",
        header: "Imię",
    },
    {
        accessorKey: "surname",
        header: "Nazwisko",
    },
    {
        accessorKey: "email",
        header: "Adres email",
    },
    {
        id: "more",
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Pobierz CV</DropdownMenuItem>
                    </DropdownMenuContent>
            </DropdownMenu>
              )
        }
    },
];

export default function MyAdsDetails({params}: {params: Promise<ParamsType>}){    
    const unwrappedParams = React.use(params);

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

                                <DataTable columns={columns} data={resumes} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}