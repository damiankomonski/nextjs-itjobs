"use client"

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Select from "react-select";
import ReactPaginate from 'react-paginate';
import { DataTable } from "./data-table";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown, MoveLeft, ChartBarStacked, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
}

const resumes: Resume[] = [
    {
        id: "a1b2c3d4",
        name: "Adam",
        surname: "Nowak",
        email: "adam.nowak@gmail.com"
    },
    {
        id: "e5f6g7h8",
        name: "Ewa",
        surname: "Kowalczyk",
        email: "ewa.kowalczyk@gmail.com"
    },
    {
        id: "i9j0k1l2",
        name: "Michał",
        surname: "Wiśniewski",
        email: "michal.wisniewski@gmail.com"
    },
    {
        id: "m3n4o5p6",
        name: "Karolina",
        surname: "Dąbrowska",
        email: "karolina.dabrowska@gmail.com"
    },
    {
        id: "q7r8s9t0",
        name: "Tomasz",
        surname: "Lewandowski",
        email: "tomasz.lewandowski@gmail.com"
    },
    {
        id: "u1v2w3x4",
        name: "Magdalena",
        surname: "Zielińska",
        email: "magdalena.zielinska@gmail.com"
    },
    {
        id: "y5z6a7b8",
        name: "Piotr",
        surname: "Szymański",
        email: "piotr.szymanski@gmail.com"
    },
    {
        id: "c9d0e1f2",
        name: "Aleksandra",
        surname: "Wójcik",
        email: "aleksandra.wojcik@gmail.com"
    },
    {
        id: "g3h4i5j6",
        name: "Krzysztof",
        surname: "Kamiński",
        email: "krzysztof.kaminski@gmail.com"
    },
    {
        id: "k7l8m9n0",
        name: "Natalia",
        surname: "Jankowska",
        email: "natalia.jankowska@gmail.com"
    },
    {
        id: "o1p2q3r4",
        name: "Bartosz",
        surname: "Mazur",
        email: "bartosz.mazur@gmail.com"
    }
];

const columns: ColumnDef<Resume>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Imię <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
            )
        },
    },
    {
        accessorKey: "surname",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Nazwisko <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Email <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
            )
        },
    },
    {
        id: "more",
        cell: ({ row }) => {
            const resume = row.original;

            return (
                <div className="flex">
                    <Link href="" className="btn btn-secondary btn-sm me-4">Pobierz CV</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 mt-1 me-4">
                                <span className="sr-only">Otwórz menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Pobierz</DropdownMenuItem>
                            <DropdownMenuItem className="text-error-500">Usuń</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
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
                                <Link href="/my-ads/" className="underline mb-4 flex"><MoveLeft className="me-4" /> Powrót do ogłoszeń</Link>
                                <h1 className="h2 mt-4 !mb-4">Front End Engineer</h1>
                            </div> 
                            <div className="col-span-full md:col-span-full mb-8">
                                <div className="flex">
                                    <p className="me-4 flex"><ChartBarStacked className="me-2" /> Javascript</p>
                                    <p className="me-4 flex"><MapPin className="me-2" /> Warszawa, Mazowieckie</p>
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