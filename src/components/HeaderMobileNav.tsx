"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HeaderMobileNav() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  function mobileNav(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    setMobileNavActive(true);
  }

  function closeNav(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    setMobileNavActive(false);
  }

  return (
    <>
      <a href="#" className="ml-4 mt-6 lg:hidden" onClick={mobileNav}>
        <img src="/images/icon-nav.svg" alt="" />
      </a>

      <div
        className={`left-0 top-0 z-[9999] h-full w-full bg-white px-8 py-12 ${mobileNavActive ? "fixed" : "hidden"}`}
      >
        <a href="" className="absolute right-6 top-9" onClick={closeNav}>
          <img src="images/icon-close.svg" alt="Close menu" />
        </a>
        <div className="mb-12">
          <Link href="/">
            <img src="images/logo.png" className="w-[68px] h-auto" />
          </Link>
        </div>

        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/" className="text-2xl font-semibold text-gray-500">
                Strona główna
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/o-nas"
                className="text-2xl font-semibold text-gray-500"
              >
                O nas
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/aukcje"
                className="text-2xl font-semibold text-gray-500"
              >
                Aukcje
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-8">
          <p className="text-gray-400">Kontakt</p>
          <a
            href="tel:+48601628984"
            className="mr-2 flex items-center text-[18px] font-semibold"
          >
            <img src="/images/icon-phone2.svg" alt="" className="mr-3" /> 601628984
          </a>
        </div>
      </div>
    </>
  );
}