import Header from "@/components/Header";
import Contactform from "@/components/Contactform";
import Link from "next/link";
import s from "@/styles/Kontakt.module.css";

export default function Kontakt() {
  return (
    <>
      <Header
        title={"Kontakt"}
        content={"So kontaktieren und finden Sie uns"}
        url={"https://druckerei-hallau.ch/kontakt"}
      />
      <main className="main">
        <section className="section">
          <article className="article">
            <div className={s.container}>
              <div className={`${s.item}`}>
                <p style={{ margin: "0 0 1rem 0" }}>
                  Öffnungszeiten: <br />
                  Montag bis Freitag 8:00 bis 12:00 und 14:00 bis 17:30 <br />
                  Terminvereinbarungen ausserhalb der Öffnungszeiten möglich
                </p>
                <p style={{ margin: "0 0 1rem 0" }}>
                  <a className={s.link} href="tel:+41526813129">
                    Tel 052 681 31 29
                  </a>
                </p>
                <p style={{ margin: "0 0 1rem 0" }}>
                  <a className={s.link} href="fax:+41526814006">
                    Fax 052 681 40 06
                  </a>
                </p>
                <p style={{ margin: "0 0 1rem 0" }}>
                  <a className={s.link} href="mailto:druck.hallau@datacomm.ch">
                    druck.hallau@datacomm.ch
                  </a>
                </p>
                <p>
                  <Link className={s.link} href="https://druckereihallau.ch">
                    www.druckereihallau.ch
                  </Link>
                </p>
              </div>
              <div className={s.item}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4216.829157735427!2d8.454043834707322!3d47.697159701329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47907ca59e3309dd%3A0x20421668a9c7fe18!2sDruckerei%20Hallau!5e1!3m2!1sen!2sch!4v1679214674503!5m2!1sen!2sch"
                  className={s.iframe}
                ></iframe>
              </div>
            </div>
          </article>
          <article className="article noBorder">
            <p>Möchten Sie ein Buch bestellen oder haben eine Anfrage an uns, so benutzen Sie unser Kontaktformular.</p>
            <Contactform />
          </article>
        </section>
      </main>
    </>
  );
}
