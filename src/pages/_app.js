import "@/css/globals.css";
import "@/css/style.css"
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return <Component {...pageProps} />;
}
