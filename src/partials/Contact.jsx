import React, { useState } from "react";
import Image from "next/image";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

import CompanyCar from "../images/car.jpg";

function Contact({
  header,
  description,
  phoneNumber,
  emailAddress,
  firstSocialTitle,
  firstSocialLink,
  secondSocialTitle,
  secondSocialLink,
}) {
  const [isHovering, setIsHovering] = useState({
    phoneNumber: false,
    mail: false,
    facebook: false,
    instagram: false,
  });

  const handleHover = (event) => {
    const elementName = event.currentTarget.id;

    setIsHovering({ ...isHovering, [elementName]: true });
  };

  const handleMouseOut = (event) => {
    const elementName = event.currentTarget.id;

    setIsHovering({ ...isHovering, [elementName]: false });
  };

  return (
    <section>
      <div id="kontakt" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t  border-zinc-700">
          <div className="max-w-3xl mx-auto text-center mb-10" data-aos-id-tabs>
            <h2
              className="h2 mb-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              {header}
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              {description}
            </p>
          </div>
          <div
            className="bg-gray-800 grid grid-cols-1 md:grid-cols-3 px-6 py-4 gap-4 max-w-md md:max-w-none md:py-8 md:px-12 mx-auto"
            data-aos="fade-up"
          >
            <Image
              className="md:row-span-2"
              src={CompanyCar}
              alt="company car"
              height="auto"
              width="auto"
            />

            <a
              className="flex md:flex-col items-center justify-center gap-4 bg-gray-700 py-3 rounded-sm hover:bg-green-600 group"
              href="tel:+48731188388"
              id="phoneNumber"
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
            >
              <div className="flex items-center justify-center p-3 rounded-full bg-green-600 group-hover:bg-white">
                <AiOutlinePhone
                  className="h-4 w-4"
                  color={isHovering.phoneNumber ? "#16a34a" : ""}
                />
              </div>
              {phoneNumber}
            </a>
            <a
              className="flex md:flex-col items-center justify-center gap-4 bg-gray-700 py-3 rounded-sm group hover:bg-green-600"
              href={`mailto:${emailAddress} ?subject=Wiadomość ze strony green-glass.pl`}
              target="_blank"
              id="mail"
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
            >
              <div className="flex items-center justify-center p-3 rounded-full bg-green-600 group-hover:bg-white">
                <AiOutlineMail
                  className="h-4 w-4"
                  color={isHovering.mail ? "#16a34a" : ""}
                />
              </div>
              {emailAddress}
            </a>
            <a
              className="flex md:flex-col items-center justify-center gap-4 bg-gray-700 py-3 rounded-sm group hover:bg-green-600"
              href={firstSocialLink}
              target="_blank"
              id="facebook"
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
            >
              <div className="flex items-center justify-center p-3 rounded-full bg-green-600 group-hover:bg-white">
                <AiOutlineFacebook
                  className="h-4 w-4"
                  color={isHovering.facebook ? "#16a34a" : ""}
                />
              </div>
              {firstSocialTitle}
            </a>
            <a
              className="flex md:flex-col items-center justify-center gap-4 bg-gray-700 py-3 rounded-sm group hover:bg-green-600"
              href={secondSocialLink}
              target="_blank"
              id="instagram"
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
            >
              <div className="flex items-center justify-center p-3 rounded-full bg-green-600 group-hover:bg-white">
                <AiOutlineInstagram
                  className="h-4 w-4"
                  color={isHovering.instagram ? "#16a34a" : ""}
                />
              </div>
              {secondSocialTitle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
