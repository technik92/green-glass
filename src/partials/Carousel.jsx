import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carousel = ({ header, description, carouselImages }) => {
  return (
    <>
      <section>
        <div id="galeria" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className=" py-12 md:py-20 border-t border-zinc-700">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2" data-aos="fade-up">
                {header}
              </h2>
              <p className="text-xl text-gray-400" data-aos="fade-right">
                {description}
              </p>
            </div>
            <div data-aos="fade-left">
              <div>
                <div
                  className="carousel-container mx-auto"
                  data-aos-id-carousel
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-carousel]"
                >
                  {carouselImages.id}
                  <Splide aria-labelledby="GreenGlassImages">
                    {carouselImages.map((image) => {
                      return (
                        <SplideSlide key={image.sys.id}>
                          <Image
                            src={"https:" + image.fields.file.url}
                            key={image.sys.id}
                            alt="Repair car window"
                            height="675"
                            width="1200"
                          />
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
