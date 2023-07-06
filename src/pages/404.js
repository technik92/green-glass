import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageIllustrationLogo from "../icons/PageIllustrationLogo.js";
import NotFoundImage from "../images/404.jpg";
import NotFoundLogo from "@/icons/NotFoundLogo";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Green Glass Mobilne Auto Szyby</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen overflow-hidden relative">
        <main className="grow">
          <div
            className="relative max-w-6xl mx-auto h-0 pointer-events-none"
            aria-hidden="true"
          >
            <PageIllustrationLogo />
          </div>
          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto text-center">
                  <div
                    className="relative inline-flex flex-col mb-6"
                    data-aos="fade-up"
                  >
                    <Image
                      className="rounded-full"
                      src={NotFoundImage}
                      width="196"
                      height="196"
                      alt="404"
                    />
                    <NotFoundLogo />
                  </div>
                  <h1
                    className="h1 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Ta strona nie istnieje
                  </h1>
                  <p
                    className="text-lg text-gray-400"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Udaj się do naszej
                    <Link
                      href="/"
                      className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    >
                      {" "}
                      strony głównej
                    </Link>
                    , która istnieje albo spróbuj sprawdzić czy wpisałeś
                    poprawny link.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
