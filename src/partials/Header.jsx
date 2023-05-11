import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../images/logo.png";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

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
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="shrink-0 mr-4"
                src={Logo}
                width="60"
                height="60"
                alt="Author 01"
              />
            </Link>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#o-nas"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/#nasze-atuty"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Nasze atuty
                </Link>
              </li>
              <li>
                <Link
                  href="/#galeria"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Galeria realizacji
                </Link>
              </li>
              <li>
                <Link
                  href="/#opinie"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Opinie klientów
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontakt"
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
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
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
                    href="/"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#o-nas"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#nasze-atuty"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Nasze atuty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#galeria"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Galeria realizacji
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#opinie"
                    className="flex text-gray-300 hover:text-gray-200 py-2"
                  >
                    Opinie klientów
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#kontakt"
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
