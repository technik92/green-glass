import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "better-react-carousel";
import Image from "next/image";
import image1 from "../images/carousel/001.jpg";
import image2 from "../images/carousel/002.jpg";
import image3 from "../images/carousel/003.jpg";
import image4 from "../images/carousel/004.jpg";
import image5 from "../images/carousel/005.jpeg";
import image6 from "../images/carousel/006.jpeg";

const Carousel2 = () => {
  return (
    <>
      <section>
        <div id="galeria-realizacji" className="max-w-6xl mx-auto px-4 sm:px-6">
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
              <div className="grid gap-12 md:grid-cols-1 md:gap-x-6 md:gap-y-8 items-start	">
                <div>
                  <Carousel cols={2} rows={1} loop scrollSnap height="200">
                    <Carousel.Item>
                      <Image width="100%" height="380" src={image1} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image width="100%" src={image2} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image width="100%" src={image3} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image width="100%" src={image4} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image width="100%" src={image5} alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image width="100%" src={image6} alt="" />
                    </Carousel.Item>
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
