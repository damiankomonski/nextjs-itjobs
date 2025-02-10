import Header from "@/components/Header";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

import {Ellipsis} from "lucide-react";
  

export default function Payments(){

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-6">
                        <aside className="col-span-full md:col-span-3 mb-8">
                            <nav className="mt-8">
                                <ul className="list-profile-nav">
                                    <li><Link href="/myprofile">Profil</Link></li>
                                    <li><Link href="/payments">Płatności</Link></li>
                                    <li><Link href="/settings">Ustawienia</Link></li>
                                    <li><Link href="/dataexport">Eksport danych</Link></li>
                                </ul>
                            </nav>
                        </aside>     
                        <section className="col-span-full md:col-span-9">
                            <h1 className="h2 mt-4 block">Płatności</h1>
                            <div>
                                <Table className="!text-base">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="">Numer płatności</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Metoda płatności</TableHead>
                                            <TableHead>Kwota brutto</TableHead>
                                            <TableHead className="text-right"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">0ASF2</TableCell>
                                            <TableCell>Zapłacono</TableCell>
                                            <TableCell>Przelewy24 (iPKO)</TableCell>
                                            <TableCell>99.00zł</TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger><Ellipsis /></DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem className="!text-base">Pobierz fakturę</DropdownMenuItem>
                                                </DropdownMenuContent>
                                                </DropdownMenu>

                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </section> 
                    </div>
                </div>
            </main>
        </>
    )
}