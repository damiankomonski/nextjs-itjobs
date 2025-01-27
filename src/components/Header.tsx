import Image from 'next/image';
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-2 mb-6 border-b">
        <div className="container grid grid-cols-12 gap-x-6">
            <div className="col-span-6 lg:col-span-9">
                <Link href="/" className="mt-3 inline-block me-8 font-semibold">IT</Link>
                <nav className="inline-block mt-3">
                  <ul>
                    <li className="inline-block"><Link href="/faq" className="mx-6">Cennik</Link></li>
                    <li className="inline-block"><Link href="/faq" className="mx-6">Artykuły</Link></li>
                  </ul>
                </nav>
            </div>
            <div className="col-span-3">
              <Link href="/login" className="me-4">Zaloguj się</Link>
              <Link href="/signup" className="btn btn-primary">Dodaj ogłoszenie</Link>
            </div>
        </div>
    </header>
  );
}
