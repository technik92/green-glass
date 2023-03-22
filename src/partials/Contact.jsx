import React from "react";
import Image from "next/image";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

import CompanyCar from "../images/car.jpg";

function Contact() {
  return (
    <section>
      <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t  border-zinc-700">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-10" data-aos-id-tabs>
            <h2
              className="h2 mb-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Kontakt
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Skontaktuj się z nami
            </p>
          </div>
          <div
            className="flex flex-col md:flex-row bg-gray-800 px-6 py-4 gap-6 max-w-md mx-auto md:max-w-none md:py-8 md:px-12"
            data-aos="fade-up"
          >
            <Image
              className="rounded-md max-h-72 md:max-h-none md:max-w-[35%] w-full h-full object-cover"
              src={CompanyCar}
              width="auto"
              height="auto"
              alt="Out service car"
            />
            <div className="flex flex-col gap-4 justify-around mx-auto text-lg md:text-xl">
              <a
                href="tel:+48731188388"
                className="flex justify-center gap-2 px-5 items-center text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                aria-label="Phone"
              >
                <AiOutlinePhone />
                +48 731 188 388
              </a>
              <a
                href="mailto:autoszybybielsko@gmail.com e-mail?subject=Wiadomość ze strony green-glass.pl"
                target="_blank"
                className="flex justify-center items-center gap-2 px-5 text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                aria-label="E-mail"
              >
                <AiOutlineMail />
                autoszybybielsko@gmail.com
              </a>
              <a
                href="https://www.facebook.com/greenglassbielsko"
                target="_blank"
                className="flex justify-center items-center gap-2 px-5 text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <AiOutlineFacebook />
                Nasz profil na Facebooku
              </a>
              <a
                href="https://www.instagram.com/greenglassbielsko/"
                target="_blank"
                className="flex justify-center items-center gap-2 px-5 text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <AiOutlineInstagram />
                Nasz profil na Instagranie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
