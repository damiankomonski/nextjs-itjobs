import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container grid grid-cols-12 gap-x-6">
            <div className="col-span-full mb-8">
              <nav>
                <ul className="flex">
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4 bg-black text-white font-semibold">HTML</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">JS</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">Java</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">Python</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">C#</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">Ruby</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">PHP</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">Swift</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">Flutter</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">C</Link></li>
                  <li className="mx-1"><Link href="/html" className="border-2 border-black py-2 px-4">Go</Link></li>
                </ul>
              </nav>
              <div>
                {/* <Image src="/images/icon-nav.svg" width={32} height={32} alt="More categories" className="ms-2 -mt-1" /> */}
              </div>
            </div>
            <div className="col-span-8">
              <article className="flex mb-4">
                <div className="w-[48px] h-[48px] inline-block bg-lightgray"></div>
                {/* <Image src="" className="w-[48px] h-[48px]" /> */}
                <div className="ms-4 me-auto">
                  <h3 className="h6 !mb-0">Front End Engineer</h3>
                  <div className="flex">
                    <p className="me-2">Allegro</p>
                    <p className="me-2">Warszawa</p>
                  </div>
                </div>
                <div className="">

                </div>
                <div className="">
                  <h4 className="h6 font-semibold !mb-0">6000 - 8000 PLN</h4>
                </div>
              </article>

                            <article className="flex mb-4">
                <div className="w-[48px] h-[48px] inline-block bg-lightgray"></div>
                {/* <Image src="" className="w-[48px] h-[48px]" /> */}
                <div className="ms-4 me-auto">
                  <h3 className="h6 !mb-0">Front End Engineer</h3>
                  <div className="flex">
                    <p className="me-2">Allegro</p>
                    <p className="me-2">Warszawa</p>
                  </div>
                </div>
                <div className="">
                  
                </div>
                <div className="">
                  <h4 className="h6 font-semibold !mb-0">6000 - 8000 PLN</h4>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
