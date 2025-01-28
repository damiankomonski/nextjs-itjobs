import Link from "next/link";
import Header from "./../../../components/Header";

type PropsType = {
    params: {
        auctionId: string
    }
}

export default async function Page({params: {adId}}: PropsType){
    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="container grid grid-cols-12 gap-x-6">
                        <div className="col-span-full md:col-span-8 mt-6">
                            <h1 className="h3">Front End Engineer</h1>
                            <div className="flex mb-4">
                                <div className="me-4">
                                    <img src="" alt="" />
                                    <p>Warszawa</p>
                                </div>
                                <div className="me-4">
                                    <img src="" alt="" />
                                    <p>Allegro</p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between">
                                <div>
                                    <img src="" alt="" />
                                    <p className="mb-1 text-sm">Wymiar pracy</p>
                                    <p className="text-[18px]">Pełny etat</p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p className="mb-1 text-sm">Doświadczenie</p>
                                    <p className="text-[18px]">Mid</p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p className="mb-1 text-sm">Rodzaj umowy</p>
                                    <p className="text-[18px]">Umowa o pracę, B2B</p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p className="mb-1 text-sm">Miejsce pracy</p>
                                    <p className="text-[18px]">Hybrydowo</p>
                                </div>
                            </div>
                            <div className="mb-8">
                                <h2 className="h4">Technologie</h2>
                                <div>
                                    <span className="border border-gray-100 py-2 px-4 me-4">Typescript</span>
                                    <span className="border border-gray-100 py-2 px-4 me-4">Angular</span>
                                    <span className="border border-gray-100 py-2 px-4 me-4">Angular Material</span>
                                </div>
                            </div>
                            <div className="mt-12">
                                <h4 className="h6">Wymagania</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies.</p>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies.</p>
                                <h4 className="h6">Proces rekrutacji</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec nisi et leo cursus fermentum. Etiam gravida diam eu posuere porttitor. Cras pellentesque dui lectus, vel feugiat ligula ornare sed. Vivamus fermentum lobortis mauris, vel aliquet arcu tristique a. Aliquam malesuada lectus eu sem placerat ullamcorper. In pellentesque et enim sed imperdiet. Mauris elit velit, mollis ac tortor non, ullamcorper rutrum dolor. Suspendisse mollis sodales ultricies.</p>
                            </div>

                            <div className="mb-8">
                                <h2 className="h4">Proces rekrutacji</h2>
                                <ol className="list-ordered-2">
                                    <li>Rozmowa telefoniczna</li>
                                </ol>
                            </div>
                        </div>

                        <div className="col-span-full md:col-span-4">
                            <h2 className="h4 mt-8">4000 - 6000zł <span className="text-[18px]">brutto</span></h2>
                            <div className="mb-8">
                                <p className="mb-2">Wysłanych CV: 102</p>
                            </div>
                            <div>
                                <div className="w-full h-[180px] border border-gray-100 border-dashed flex items-center justify-center">
                                    <p className="text-[14px] text-gray-500">Przeciąg CV</p>
                                </div>
                                <Link href="" className="btn btn-primary w-full mt-4">Aplikuj</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}