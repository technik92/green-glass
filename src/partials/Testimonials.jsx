import React from "react";

function Testimonials({
  header,
  description,
  namesClients,
  firstClientOpinion,
  secondClientOpinion,
  thirdClientOpinion,
}) {
  const [firstClientNames, secondClientNames, thirdClientNames] = namesClients;

  return (
    <section>
      <div id="opinie" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-zinc-700">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{header}</h2>
            <p className="text-xl text-gray-400">{description} </p>
          </div>
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <blockquote className="text-lg text-gray-400 grow">
                {firstClientOpinion}
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-zinc-700">
                <cite className="text-gray-200 not-italic">
                  {firstClientNames}
                </cite>
              </div>
            </div>
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <blockquote className="text-lg text-gray-400 grow">
                {secondClientOpinion}
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-zinc-700">
                <cite className="text-gray-200 not-italic">
                  {secondClientNames}
                </cite>
              </div>
            </div>
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <blockquote className="text-lg text-gray-400 grow">
                {thirdClientOpinion}
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-zinc-700">
                <cite className="text-gray-200 not-italic">
                  {thirdClientNames}
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
