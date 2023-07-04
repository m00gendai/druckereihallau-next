import s from "@/styles/footer.module.css";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const isMobile = useMediaQuery("only screen and (max-aspect-ratio: 13/9)");

  return (
    <footer>
      <div className={`${s.details} ${isMobile ? "center" : "left"}`}>
        <p>Druckerei Hallau</p>
        <p>Inh. Max Weber</p>
        <p>Hautpstrasse 26</p>
        <p>8215 Hallau</p>
        <p>Tel 052 681 31 29</p>
        <p>Fax 052 681 40 06</p>
        <p>druck.hallau@datacomm.ch</p>
        <p>www.druckereihallau.ch</p>
      </div>
      <div className={`${s.copyright} ${"center"}`}>
        <p>Öffnungszeiten:</p>
        <p>Montag bis Freitag 8:00 bis 12:00 und 14:00 bis 17:30</p>
        <p>Terminvereinbarungen ausserhalb der Öffnungszeiten möglich</p>
        <p>{`© 2017-${currentYear} Druckerei Hallau`}</p>
      </div>
      {isMobile ? null : (
        <nav className={`${s.menu} ${"right"}`}>
          <Link className={s.link} href="/">
            Home
          </Link>
          <Link className={s.link} href="/drucksachen">
            Drucksachen
          </Link>
          <Link className={s.link} href="/speziealangebote">
            Spezialangebote
          </Link>
          <Link className={s.link} href="/buecher">
            Bücher
          </Link>
          <Link className={s.link} href="/kontakt">
            Kontakt
          </Link>
          <Link className={s.link} href="/impressum">
            Impressum
          </Link>
          <Link className={s.link} href="/datenschutz">
            Datenschutz
          </Link>
        </nav>
      )}
    </footer>
  );
}
