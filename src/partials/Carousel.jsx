import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import image1 from "../images/carousel/001.jpg";
import image2 from "../images/carousel/002.jpg";
import image3 from "../images/carousel/003.jpg";
import image4 from "../images/carousel/004.jpg";
import image5 from "../images/carousel/005.jpeg";
import image6 from "../images/carousel/006.jpeg";
import image7 from "../images/carousel/007.jpg";
import image9 from "../images/carousel/009.jpeg";
import image10 from "../images/carousel/010.jpg";
import image11 from "../images/carousel/011.jpg";
import image12 from "../images/carousel/012.jpg";
import image13 from "../images/carousel/013.jpg";
import image14 from "../images/carousel/014.jpg";
import image15 from "../images/carousel/015.jpg";
import image16 from "../images/carousel/016.jpg";
import image19 from "../images/carousel/019.jpg";
import image20 from "../images/carousel/020.jpeg";
import image21 from "../images/carousel/021.jpg";
import image22 from "../images/carousel/022.jpg";
import image23 from "../images/carousel/023.jpg";
import image25 from "../images/carousel/025.jpeg";
import image26 from "../images/carousel/026.jpeg";

const Carousel = ({ header, description, carouselImages }) => {
  console.log("carousem img: ", carouselImages);
  return (
    <>
      <section>
        <div id="galeria" className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-zinc-700">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2" data-aos="fade-up">
                {header}
              </h2>
              <p className="text-xl text-gray-400" data-aos="fade-right">
                {description}
              </p>
            </div>
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
                    <Splide aria-labelledby="GreenGlassImages">
                      <SplideSlide>
                        <Image src={image1} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image2} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image3} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image4} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image5} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image6} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image7} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image9} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image10} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image11} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image12} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image13} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image14} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image15} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image16} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image19} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image20} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image21} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image22} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image23} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image25} alt="Repair car window" />
                      </SplideSlide>
                      <SplideSlide>
                        <Image src={image26} alt="Repair car window" />
                      </SplideSlide>
                    </Splide>
                  </div>
                </div>
                <div>
                  {carouselImages.map((image) => {
                    return (
                      <div key={image.sys.id}>
                        {"https:" + image.fields.file.url}
                      </div>
                    );
                  })}
                </div>
                <div className="grid place-items-center py-8 bg-gray-800">
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
                          <SplideSlide key="image">
                            <Image
                              src={"https:" + image.fields.file.url}
                              key={image.sys.id}
                              alt="Repair car window"
                              height="700"
                              width="1000"
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
        </div>
      </section>
    </>
  );
};

export default Carousel;
