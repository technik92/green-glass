import React from "react";
import HeroImage from "../images/logo2.png";
import Image from "next/image";

function HeroHome({ header, description }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        ></div>
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              {header}
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {description}
            </p>
          </div>
          <div>
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                className="mx-auto"
                src={HeroImage}
                width="1024"
                height="504"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
