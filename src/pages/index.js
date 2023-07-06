import Head from "next/head";

import Header from "@/partials/Header";
import Footer from "@/partials/Footer";
import HeroHome from "@/partials/HeroHome";
import PageIllustrationLogo from "../icons/PageIllustrationLogo.js";
import Testimonials from "@/partials/Testimonials";
import AboutAs from "@/partials/AboutAs";
import Contact from "@/partials/Contact";

import { createClient } from "contentful";
import Carousel from "@/partials/Carousel";

export default function Home({ websiteData }) {
  const {
    homeHeader,
    homeDescription,
    aboutUsHeader,
    aboutUsDescription,
    aboutUsCharacteristicsHeaders,
    aboutUsCharacteristicsDescriptions,
    carouselHeader,
    carouselDescription,
    testimonialsHeader,
    testimonialsDescription,
    testimonialsNamesClients,
    testimonialsClientOpinion1,
    testimonialsClientOpinion2,
    testimonialsClientOpinion3,
    contactHeader,
    contactDescription,
    contactPhoneNumber,
    contactEmailAddress,
    contactFirstSocialTitle,
    contactFirstSocialLink,
    contactSecondSocialTitle,
    contactSecondSocialLink,
    carouselImages,
  } = websiteData;

  return (
    <>
      <Head>
        <title>Green Glass Mobilne Auto Szyby</title>
        <meta name="description" content="Mobilna wymiana szyb samochodowych z dojazdem do klienta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grow">
        <div className="flex flex-col min-h-screen overflow-hidden relative">
          <Header />
          <HeroHome header={homeHeader} description={homeDescription} />
          <AboutAs
            header={aboutUsHeader}
            description={aboutUsDescription}
            charasteristicsHeaders={aboutUsCharacteristicsHeaders}
            charasteristicsDescriptions={aboutUsCharacteristicsDescriptions}
          />
          <PageIllustrationLogo />
          <Carousel
            header={carouselHeader}
            description={carouselDescription}
            carouselImages={carouselImages}
          />
          <Testimonials
            header={testimonialsHeader}
            description={testimonialsDescription}
            namesClients={testimonialsNamesClients}
            firstClientOpinion={testimonialsClientOpinion1}
            secondClientOpinion={testimonialsClientOpinion2}
            thirdClientOpinion={testimonialsClientOpinion3}
          />
          <Contact
            header={contactHeader}
            description={contactDescription}
            phoneNumber={contactPhoneNumber}
            emailAddress={contactEmailAddress}
            firstSocialTitle={contactFirstSocialTitle}
            firstSocialLink={contactFirstSocialLink}
            secondSocialTitle={contactSecondSocialTitle}
            secondSocialLink={contactSecondSocialLink}
          />
          <Footer
            firstSocialLink={contactFirstSocialLink}
            secondSocialLink={contactSecondSocialLink}
          />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "websiteData" });

  return {
    props: {
      websiteData: res.items[0]?.fields,
    },
  };
};
