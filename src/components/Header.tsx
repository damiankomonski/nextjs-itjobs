import Image from 'next/image';
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function Header() {
  return (
    <header className="py-2 mb-6 border-b">
        <div className="container grid grid-cols-12 gap-x-6">
            <div className="col-span-6 lg:col-span-8">
                <Link href="/" className="mt-3 inline-block me-8 font-semibold">IT</Link>
                <nav className="inline-block mt-3">
                  <ul>
                    <li className="inline-block before:hidden"><Link href="/faq" className="mx-6">Cennik</Link></li>
                    <li className="inline-block before:hidden"><Link href="/faq" className="mx-6">Artykuły</Link></li>
                  </ul>
                </nav>
            </div>
            <div className="col-span-4">
              <div className="flex justify-end w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger className="me-4">Twoje konto</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem><Link href="/myprofile">Profil</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="/settings">Ustawienia</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* <Link href="/login" className="me-4">Zaloguj się</Link> */}
                <Link href="/signup" className="btn btn-primary">Dodaj ogłoszenie</Link>
              </div>
            </div>
        </div>
    </header>
  );
}
