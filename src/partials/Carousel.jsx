import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import image1 from "../images/carousel/carousel1.jpg";
import image2 from "../images/carousel/carousel2.jpg";
import image3 from "../images/carousel/carousel3.jpg";

const Carousel2 = () => {
  return (
    <>
      <section>
        <div id="carousel" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-zinc-700">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2" data-aos="fade-up">
                Galeria naszych realizacji
              </h2>
              <p className="text-xl text-gray-400" data-aos="fade-right">
                Sprawdź nasze realizacje, zdjęcia z ostatnich napraw
              </p>
            </div>

            {/* Carousel */}
            <div
              className="max-w-sm mx-auto md:max-w-none"
              data-aos="fade-left"
            >
              <div className="grid gap-12 md:grid-cols-1 md:gap-x-6 md:gap-y-8 items-start">
                <div>
                  <Carousel>
                    <div>
                      <Image
                        src={image1}
                        alt="car, glass, repair"
                        width="800"
                        height="400"
                      />
                    </div>
                    <div>
                      <Image
                        src={image2}
                        alt="car, glass, repair"
                        width="800"
                        height="400"
                      />
                    </div>
                    <div>
                      <Image
                        src={image3}
                        alt="car, glass, repair"
                        width="800"
                        height="400"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel2;
