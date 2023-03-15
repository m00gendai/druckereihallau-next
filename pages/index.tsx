import Header from "@/components/Header.tsx"
import Image from "next/image"
import s from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Header title={"Druckerei Hallau"} content={"Die Druckerei Hallau im Herzen des Schaffhauser Klettgaus"} url={"https://druckerei-hallau.ch"} />
      <main className="main">
        <article className={s.article}>
          <p>
            Die Druckerei Hallau ist seit Jahrzehnten in der Klettgauer Weinmetropole Hallau ansässig und verwurzelt.<br/>
            Zur Kundschaft zählen die Gemeinden des Klettgaus, die Kirchgemeinden, Industrie- und Gewerbebetriebe, Kellereien und Weinproduzenten, Verbände und Vereine sowie Private.<br/>
            Die Druckerei ist spezialisiert auf kleine bis mittlere Auflagen von Drucksachen aller Art.<br/>
            Dank Digitaldrucktechnik können alle Drucksachen zu günstigen Konditionen und in kürzester Zeit hergestellt werden – auch in Kleinstauflagen.
          </p>
          <p>
            Die Druckerei bietet auch Eigenkreationen an:<br/>
            Interessante und spannende Bücher über Hallau, Postkarten und Notizblöckli, nostalgische Schulhefte, witzige Büchlein, Kleber und allerlei Karten.
          </p>
        </article>
        <section className={s.books}>
        </section>
      </main>
    </>
  )
}
