import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Navbar_Mobile from "@/components/Navbar_Mobile";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { useMediaQuery } from "@react-hook/media-query";

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useMediaQuery("only screen and (max-aspect-ratio: 13/9)");

  return (
    <>
      {!isMobile ? <Navbar /> : <Navbar_Mobile />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
