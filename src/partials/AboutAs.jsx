import React from "react";
import MobilityIcon from "../icons/MobilityLogo.js";
import ExperienceLogo from "../icons/ExperienceLogo.js";
import GuaranteeLogo from "../icons/GuaranteeLogo.js";

function AboutAs({
  header,
  description,
  charasteristicsHeaders,
  charasteristicsDescriptions,
}) {
  const [
    firstCharacteristicHeader,
    secondCharacteristicHeader,
    thirdCharacteristicHeader,
  ] = charasteristicsHeaders;

  const [
    firstCharacteristicDescription,
    secondCharacteristicDescription,
    thirdCharacteristicDescription,
  ] = charasteristicsDescriptions;

  return (
    <section>
      <div id="o-nas" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">
              {header}
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {description}
            </p>
          </div>
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="100"
              ></div>
              <MobilityIcon />
              <div className="h4 mb-2">{firstCharacteristicHeader}</div>
              <p className="text-lg text-gray-400 text-center">
                {firstCharacteristicDescription}
              </p>
            </div>
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                aria-hidden="true"
                className="absolute h-1 border-t border-dashed border-zinc-700 hidden md:block"
                style={{
                  width: "calc(100% - 32px)",
                  left: "calc(50% + 48px)",
                  top: "32px",
                }}
                data-aos="fade-in"
                data-aos-delay="400"
              ></div>
              <ExperienceLogo />
              <div className="h4 mb-2">{secondCharacteristicHeader}</div>
              <p className="text-lg text-gray-400 text-center">
                {secondCharacteristicDescription}
              </p>
            </div>
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <GuaranteeLogo />
              <div className="h4 mb-2">{thirdCharacteristicHeader}</div>
              <p className="text-lg text-gray-400 text-center">
                {thirdCharacteristicDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAs;
