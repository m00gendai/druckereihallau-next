import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Navbar_Mobile from "@/components/Navbar_Mobile";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { useMediaQuery } from "@react-hook/media-query";
import { CookieConsent, getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from "react"
import ReactGA from "react-ga4";
import Link from "next/link";
import c from "@/styles/CookieBanner.module.css"

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useMediaQuery("only screen and (max-aspect-ratio: 13/9)");

  useEffect(() => {
    const isConsent = getCookieConsentValue("DruckiHallausYummyCookie");
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  const initGA = (id: string) => {
      ReactGA.initialize(id);
  };

  const handleAcceptCookie = () => {
    initGA(`${process.env.NEXT_PUBLIC_GA}`)
};

  return (
    <>
      {!isMobile ? <Navbar /> : <Navbar_Mobile />}
      <Component {...pageProps} />
      <Footer />
      <CookieConsent
  location="bottom"
  buttonText="Okay!"
  cookieName="DruckiHallausYummyCookie"
  style={{background: "white"}}
  containerClasses={c.bar}
  contentClasses={c.inner}
  buttonWrapperClasses={c.buttons}
  buttonClasses={`${c.button} ${c.yes}`}
  declineButtonClasses={`${c.button} ${c.no}`}
  enableDeclineButton
  declineButtonText="Nein!"
  onAccept={handleAcceptCookie}
  disableStyles
  disableButtonStyles
>
  Diese Webseite nutzt Cookies für einige Funktionen! <Link className={`${c.link}`} href="/impressum">Impressum</Link>
      <Link className={`${c.link}`} href="/datenschutz">Datenschutzerklärung</Link>{" "}
</CookieConsent>
    </>
  );
}
