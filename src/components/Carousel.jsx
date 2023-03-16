import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";

const Carousel = ({ slidesData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [...slidesData];

  const infiniteScroll = () => {
    if (currentIndex === slides.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => infiniteScroll(), 3000);

    return () => clearInterval(interval);
  });

  const handleNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
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
          style={{ transform: `translate(-${currentIndex * 100}%)` }}
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

      <div className="carousel__indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel__indicator ${
              index === currentIndex ? "carousel__indicator--active" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
