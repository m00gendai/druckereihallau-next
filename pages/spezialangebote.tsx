import Header from "@/components/Header";
import s from "@/styles/Spezialangebote.module.css";

export default function Spezialangebote() {
  return (
    <>
      <Header
        title={"Spezialangebote"}
        content={
          "Postkarten, Notizblöckli, Gedrucktes über Hallau, Restposten an Papieren und Couverts"
        }
        url={"https://druckerei-hallau.ch/spezialangebote"}
      />
      <main className="main">
        <section className="section">
          <article className="article">
            <h1>Postkarten</h1>
            <p>
              Wir bieten eine Vielzahl Hallauer Postkarten an. Dorfansichten,
              Wahrzeichen, Nostalgie: Betrachten Sie hier eine kleine Auswahl!
            </p>
            <div className={s.containerGrid}>
              <div
                className={s.image}
                style={{ backgroundImage: `url("/postkarte_1.jpg")` }}
              ></div>
              <div
                className={s.image}
                style={{ backgroundImage: `url("/postkarte_2.jpg")` }}
              ></div>
              <div
                className={s.image}
                style={{ backgroundImage: `url("/postkarte_2.jpg")` }}
              ></div>
            </div>
            <div className={s.containerSingle}>
              <div
                className={s.imageSingle}
                style={{ backgroundImage: `url("/postkarten.jpg")` }}
              ></div>
            </div>
          </article>
          <article className="article">
            <h1>Notitzblöckli</h1>
            <p>
              Wir fertigen für Sie verschiedene Notizblöckli an – mit Hallauer
              Motiven oder neutral – in verschiedenen Grössen.
            </p>
            <div className={s.containerSingle}>
              <div
                className={s.imageSingle}
                style={{ backgroundImage: `url("/notitz.jpg")` }}
              ></div>
            </div>
          </article>
          <article className="article">
            <h1>Gedrucktes über Hallau</h1>
            <p>
              Wir haben geschichtliche und informative Literatur und
              Schriftstücke über Hallau im Angebot.
            </p>
            <div className={s.containerSingle}>
              <div
                className={s.imageSingle}
                style={{ backgroundImage: `url("/books.jpg")` }}
              ></div>
            </div>
          </article>
          <article className="article">
            <h1>Restposten: Papiere und Couverts</h1>
            <p>
              Wir verfügen über verschiedene Papiere zum Schreiben, Bedrucken
              oder Kopieren und passende Couverts zum Versenden.
            </p>
            <div className={s.containerSingle}>
              <div
                className={s.imageSingle}
                style={{ backgroundImage: `url("/rest.jpg")` }}
              ></div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
