import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../images/logo.png";
import HeaderLogo from "@/icons/HeaderLogo";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const objectOfLinks = {
    aboutas: "/#o-nas",
    gallery: "/#galeria",
    testimonial: "/#opinie",
    contact: "/#kontakt",
  };

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="absolute w-full z-30 mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block">
              <Image
                className="shrink-0 mr-4"
                src={Logo}
                width="60"
                height="60"
                alt="Logo of company - text green glass"
              />
            </Link>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href={objectOfLinks.aboutas}
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  O nas
                </Link>
              </li>

              <li>
                <Link
                  href={objectOfLinks.gallery}
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Galeria realizacji
                </Link>
              </li>
              <li>
                <Link
                  href={objectOfLinks.testimonial}
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Opinie klientów
                </Link>
              </li>
              <li>
                <Link
                  href={objectOfLinks.contact}
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <HeaderLogo />
            </button>
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link
                    href={objectOfLinks.aboutas}
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href={objectOfLinks.gallery}
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Galeria realizacji
                  </Link>
                </li>
                <li>
                  <Link
                    href={objectOfLinks.testimonial}
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Opinie klientów
                  </Link>
                </li>
                <li>
                  <Link
                    href={objectOfLinks.contact}
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
