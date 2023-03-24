import React, { useState, useEffect } from "react";
import Image from "next/image";

import image1 from "../images/carousel/001.jpg";
import image2 from "../images/carousel/002.jpg";
import image3 from "../images/carousel/003.jpg";
import image4 from "../images/carousel/004.jpg";
import image5 from "../images/carousel/005.jpeg";
import image6 from "../images/carousel/006.jpeg";
import image7 from "../images/carousel/007.jpg";
import image8 from "../images/carousel/008.jpeg";
import image9 from "../images/carousel/009.jpeg";
import image10 from "../images/carousel/010.jpg";
import image11 from "../images/carousel/011.jpg";
import image12 from "../images/carousel/012.jpg";
import image13 from "../images/carousel/013.jpg";
import image14 from "../images/carousel/014.jpg";
import image15 from "../images/carousel/015.jpg";
import image16 from "../images/carousel/016.jpg";
import image17 from "../images/carousel/017.jpeg";
import image18 from "../images/carousel/018.jpeg";
import image19 from "../images/carousel/019.jpg";
import image20 from "../images/carousel/020.jpeg";
import image21 from "../images/carousel/021.jpg";
import image22 from "../images/carousel/022.jpg";
import image23 from "../images/carousel/023.jpg";
import image24 from "../images/carousel/024.jpg";
import image25 from "../images/carousel/025.jpeg";
import image26 from "../images/carousel/026.jpeg";

import { ArrowRightIcon, ArrowLeftIcon } from "@/icons";

const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
  ];

  const infiniteScroll = () => {
    if (currentIndex === slides.length - 2) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => infiniteScroll(), 3000);

    return () => clearInterval(interval);
  });

  const handleNextSlide = () => {
    if (currentIndex === slides.length - 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 2);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <section>
        <div id="galeria" className="max-w-6xl mx-auto px-4 sm:px-6">
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
              <div>
                <div className="grid place-items-center py-8 bg-gray-800">
                  <div
                    className="carousel-container mx-auto"
                    data-aos-id-carousel
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-carousel]"
                  >
                    {slides.map((slide, index) => (
                      <Image
                        key={index}
                        src={slide}
                        className="carousel__item"
                        alt="slide"
                        style={{
                          transform: `translate(-${currentIndex * 100}%)`,
                          minWidth: "50%",
                          width: "50%",
                        }}
                      />
                    ))}

                    <div className="carousel__controls">
                      <button type="button" onClick={handlePrevSlide}>
                        <Image
                          alt="left arrow"
                          src={ArrowLeftIcon}
                          height="auto"
                          width="auto"
                          className="controls__arrow"
                        />
                      </button>

                      <button type="button" onClick={handleNextSlide}>
                        <Image
                          alt="left arrow"
                          src={ArrowRightIcon}
                          height="auto"
                          width="auto"
                          className="controls__arrow"
                        />
                      </button>
                    </div>
                  </div>
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
