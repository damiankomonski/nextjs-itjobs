import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  const ads = [1, 2, 3, 4, 5];

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container grid grid-cols-12 gap-x-6">
            <div className="col-span-full mb-8">
              <nav>
                <ul className="flex list-technologies">
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4 bg-black text-white font-semibold">AI</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">HTML</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">Typescript</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">Java</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">Python</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">C#</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">Ruby</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">PHP</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">Swift</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">Flutter</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">C</Link></li>
                  <li className="me-2"><Link href="/html" className="border-2 border-black py-2 px-4">Go</Link></li>
                </ul>
              </nav>
              <div>
                {/* <Image src="/images/icon-nav.svg" width={32} height={32} alt="More categories" className="ms-2 -mt-1" /> */}
              </div>
            </div>
            <div className="col-span-8">
              {ads.map((ad, index) => (
                  <article className="flex mb-4" key={index}>
                  <div className="w-[56px] h-[56px] inline-block border border-gray-100">
  
                  </div>
                  <div className="ms-6 me-auto">
                    <h3 className="h6 !mb-0"><Link href="/ad/65413kajsh-124124asfas">Front End Engineer</Link></h3>
                    <div className="flex">
                      <div className="me-4">
                        <img src={undefined} alt="" />
                        <p>Allegro</p>
                      </div>
                      <div className="me-4">
                        <img src={undefined} alt="" />
                        <p>Warszawa</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="h6 font-semibold !mb-0 mt-3">6000 - 8000zł</h4>
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
