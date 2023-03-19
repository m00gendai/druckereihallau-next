import Header from "@/components/Header";
import BookTeaser from "@/components/BookTeaser";
import Image from "next/image";
import s from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header
        title={"Druckerei Hallau"}
        content={"Die Druckerei Hallau im Herzen des Schaffhauser Klettgaus"}
        url={"https://druckerei-hallau.ch"}
      />
      <main className="main">
        <article className={s.article}>
          <p>
            Die Druckerei Hallau ist seit Jahrzehnten in der Klettgauer
            Weinmetropole Hallau ansässig und verwurzelt.
            <br />
            Zur Kundschaft zählen die Gemeinden des Klettgaus, die
            Kirchgemeinden, Industrie- und Gewerbebetriebe, Kellereien und
            Weinproduzenten, Verbände und Vereine sowie Private.
            <br />
            Die Druckerei ist spezialisiert auf kleine bis mittlere Auflagen von
            Drucksachen aller Art.
            <br />
            Dank Digitaldrucktechnik können alle Drucksachen zu günstigen
            Konditionen und in kürzester Zeit hergestellt werden – auch in
            Kleinstauflagen.
          </p>
          <br />
          <p>
            Die Druckerei bietet auch Eigenkreationen an:
            <br />
            Interessante und spannende Bücher über Hallau, Postkarten und
            Notizblöckli, nostalgische Schulhefte, witzige Büchlein, Kleber und
            allerlei Karten.
          </p>
        </article>
        <section className={s.books}>
          <BookTeaser book={"hallau"} />
          <BookTeaser book={"gass"} />
          <BookTeaser book={"alltaegliches"} />
        </section>
        <section className={s.front}>
          <iframe
            className={s.iframe}
            src="https://www.google.com/maps/embed?pb=!4v1679213456954!6m8!1m7!1sSKnMk92n2LDvzNNGjAsS2A!2m2!1d47.69727304194427!2d8.458397293365016!3f153.46738467492204!4f-3.3331480400944713!5f0.7820865974627469"
          ></iframe>
        </section>
      </main>
    </>
  );
}
