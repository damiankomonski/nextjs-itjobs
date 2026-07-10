import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { Building2, MapPin } from "lucide-react";

export default function Home() {
  const ads = [1, 2, 3, 4, 5];

  return (
    <>
      <Header />
      <main>
        {/* <section className="mb-4">
          <div className="container">
            <div className="bg-gray-100 h-[360px] text-center">
              <h1 className="h3 pt-10">Znajdź pracę w IT</h1>
            </div>
          </div>
        </section> */}
        <section className="">
          <div className="container grid grid-cols-12 gap-x-6">
            <div className="col-span-full mb-8">
              {/* <nav>
                <ul className="flex list-technologies">
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4 bg-black text-white font-semibold">AI</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">HTML</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">Typescript</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">Java</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">Python</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">C#</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">Ruby</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">PHP</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">Swift</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">Flutter</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">C</Link></li>
                  <li className="pl-0 pr-2"><Link href="/html" className="border-2 border-black py-2 px-4">Go</Link></li>
                </ul>
              </nav> */}
              {/* <div> */}
                {/* <Image src="/images/icon-nav.svg" width={32} height={32} alt="More categories" className="ms-2 -mt-1" /> */}
              {/* </div> */}
            </div>
            <div className="col-span-full">
              {ads.map((ad, index) => (
                  <article className="flex mb-3" key={index}>
                  <div className="w-[56px] h-[56px] inline-block border border-gray-100 rounded-full">
  
                  </div>
                  <div className="ms-4 me-auto">
                    <h3 className="h6 !mb-0"><Link href="/ad/65413kajsh-124124asfas">Front End Engineer</Link></h3>
                    <div className="flex">
                      <div className="me-4 flex items-center gap-1.5">
                        <MapPin className="w-5 h-5 -mt-4" />
                        <p className="text-[14px]">Allegro</p>
                      </div>
                      <div className="me-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 -mt-4" />
                        <p className="text-[14px]">Warszawa</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <h4 className="h6 !mb-0">6000 - 8000zł</h4>
                    <p className="text-[14px] text-gray-500 mt-1">Umowa o pracę</p>
                  </div>
                </article>
                ))}

                
              <div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
