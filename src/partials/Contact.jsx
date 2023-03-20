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
      <div id="advantages" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t  border-zinc-700">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center" data-aos-id-tabs>
            <h2
              className="h2 mb-4"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]"
            >
              Kontakt{" "}
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
          <div>
            <div className="relative flex flex-col mt-16" data-aos="fade-up">
              <article className="flex max-w-md mx-auto md:max-w-none">
                <div
                  className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={CompanyCar}
                    width="200"
                    height="287"
                    alt="Out service car"
                  />
                </div>
                <div className="relative bg-gray-800  text-green-400 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                  <div
                    className="text-lg max-w-3xl mx-auto text-center pb-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <a
                      href="tel:+48731188388"
                      className="flex justify-center items-center text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                      aria-label="Phone"
                    >
                      <p className="px-2">
                        <AiOutlinePhone />
                      </p>
                      +48 731 188 388
                    </a>
                  </div>
                  <div
                    className="text-lg  max-w-3xl mx-auto text-center pb-12"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <a
                      href="mailto:autoszybybielsko@gmail.com e-mail?subject=Wiadomość ze strony green-glass.pl"
                      target="_blank"
                      className="flex justify-center items-center text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                      aria-label="E-mail"
                    >
                      <p className="px-2">
                        <AiOutlineMail />
                      </p>
                      autoszybybielsko@gmail.com
                    </a>
                  </div>
                  <div
                    className="text-lg  max-w-3xl mx-auto text-center pb-12"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <a
                      href="https://www.facebook.com/greenglassbielsko"
                      target="_blank"
                      className="flex justify-center items-center text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <p className="px-2">
                        <AiOutlineFacebook />
                      </p>
                      Nasz profil na Facebooku
                    </a>
                  </div>
                  <div
                    className="text-lg  max-w-3xl mx-auto text-center pb-12"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <a
                      href="https://www.instagram.com/greenglassbielsko/"
                      target="_blank"
                      className="flex justify-center items-center text-green-600 bg-gray-800 hover:text-gray-100 hover:bg-green-600 rounded-full transition duration-150 ease-in-out"
                      aria-label="Instagram"
                    >
                      <p className="px-2">
                        <AiOutlineInstagram />
                      </p>
                      Nasz profil na Instagranie
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
