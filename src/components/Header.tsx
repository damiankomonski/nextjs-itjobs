import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import HeaderMobileNav from "./HeaderMobileNav";

const categoryLinks = [
  { href: "/backend", label: "Backend" },
  { href: "/frontend", label: "Frontend" },
  { href: "/fullstack", label: "Fullstack" },
  { href: "/devops", label: "DevOps" },
  { href: "/mobile", label: "Mobile" },
  { href: "/data", label: "Data / AI" },
];
export default function Header() {
  return (
    <header className="py-2 mb-4">
        <div className="container grid grid-cols-12 gap-x-6">
            <div className="col-span-6 lg:col-span-8">
                <Link href="/" className="mt-6 inline-block me-8 font-semibold text-black">React Ads</Link>
                <nav className="hidden md:inline-block mt-3">
                  <ul>
                    <li className="inline-block before:hidden pl-0">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="mx-4">
                          Kategorie <ChevronDown className="inline-block h-[20px]" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {categoryLinks.map(({ href, label }) => (
                            <DropdownMenuItem key={href} className="!text-base">
                              <Link href={href} className="w-full">
                                {label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                    <li className="inline-block before:hidden pl-0"><Link href="/cennik" className="mx-4">Cennik</Link></li>
                    <li className="inline-block before:hidden pl-0"><Link href="/artykuly" className="mx-4">Artykuły</Link></li>
                  </ul>
                </nav>
            </div>
            <div className="col-span-6 lg:col-span-4">
              <div className="flex justify-end w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger className="hidden md:inline-block me-4 mt-4">Twoje konto <ChevronDown className="inline-block h-[20px]" /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="!text-base"><Link href="/my-ads" className="w-full">Moje ogłoszenia</Link></DropdownMenuItem>
                    <DropdownMenuItem className="!text-base"><Link href="/my-profile" className="w-full">Profil</Link></DropdownMenuItem>
                    <DropdownMenuItem className="!text-base"><Link href="/payments" className="w-full">Płatności</Link></DropdownMenuItem>
                    <DropdownMenuItem className="!text-base"><Link href="/settings" className="w-full">Ustawienia</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <HeaderMobileNav />
                {/* <Link href="/login" className="me-4 mt-3">Zaloguj się</Link> */}
                <Link href="/add-ad/1" className="!hidden md:!inline-block btn btn-primary mt-3">Dodaj ogłoszenie</Link>
              </div>
            </div>
        </div>
    </header>
  );
}
