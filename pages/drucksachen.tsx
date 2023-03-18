import Header from "@/components/Header"
import Link from "next/link"
import s from "@/styles/Drucksachen.module.css"

export default function Drucksachen(){

  const drucksachen: string[] = [
    "Briefpapiere",
    "Flaschen-Etiketten",
    "Prospekte",
    "Plakate",
    "Couverts jeder Art",
    "Broschüren",
    "Selbstklebe-Etiketten",
    "Festführer",
    "Vereinsdrucksachen",
    "Adresskleber",
    "Visitenkarten",
    "Einzahlungsscheine",
    "Werbedrucksachen",
    "Preislisten",
    "vielseitige Karten",
  ]

  const dienste: string[] = [
    "Ausdrucke ab Daten",
    "Scannen",
    "Bilddatenbearbeitung",
    "Inserategestaltung",
    "Inserateservice",
    "Kopierservice, bis A3+, schwarz oder farbig, auf jedes Papier",
    "Ibico Ringbindung für DIssertationen, Arbeiten, Dossiers, etc.",
    "Beratung bei Druckteschnischen Fragen und Problemstellungen"
  ]

  const skills: string[] = [
    "Schneiden",
    "Heften", 
    "Falzen",
    "Lochen", 
    "Perforieren",
    "Rillen",
    "Leimen",
  ]

  const grief: string[] = [
    "Zirkulare",
    "Karten",
    "Couverts",
    "Inserategestaltung",
    "Inserateservice"
  ]

    return(
        <>
        <Header title={"Drucksachen"} content={"Gestalten, setzen, drucken und fertigen von Drucksachen aller Art"} url={"https://druckerei-hallau.ch/drucksachen"} />
      <main className="main">
        <section className="section">
      <Link href="/kontakt" className="button">Gerne erstellen wir Ihnen eine unverbindliche Offerte zu allen erwähnten Drucksachen oder Dienstleistungen.</Link>
      <p>
        Dazu benötigen wir allerdings konkrete Angaben wie Beschreibung des Produktes, Auflage, Farbigkeit, Format, Papierwunsch, Dringlichkeit und – besonders wichtig – Datenformate (PDF, Word, Excel, Tiff, EPS usw.).
        </p>
        <article className="article">
          <p>Wir gestalten, setzen, drucken und fertigen Drucksachen aller Art:</p>
          <div className={s.container}>
          <ul>
            {drucksachen.map((item, index)=>{
              return <li key={`li_print_${index}`>{`${index === drucksachen.length-1 ? "...und" : ""} ${item}`}</li>
            })}
          </ul>
          <div className={s.image} style={{backgroundImage: `url("/drucksachen.jpg")`}}></div>
          </div>
          <p>Wir bieten...</p>
          <div className={s.container}>
            <ul>
              {dienste.map((item, index)=>{
              return <li key={`li_dienste_${index}`}>{`${index === dienste.length-1 ? "...und" : ""} ${item}`}</li>
            })}
              </ul>
              <div className={s.image} style={{backgroundImage: `url("/print.jpg")`}}></div>
              </div>
              <p>Wir können...</p>
              <div className={s.container}>
              <ul>
                {skills.map((item, index)=>{
              return <li key={`li_skills_${index}`>{`${index === skills.length-1 ? "...und" : ""} ${item}`}</li>
            })}
            </ul>
            <div className={s.image} style={{backgroundImage: `url("/ringbinder.jpg")`}}></div>

            </div>
            <p>Insbesondere bieten wir eine allumfassende Beratung bei Trauerfällen, mit Zirkularen, Karten, Couverts, Inserategestaltung und-service.</p>
            <div className={s.container}>
            <ul>
                {grief.map((item, index)=>{
              return <li key={`li_grief_${index}`>{`${index === grief.length-1 ? "...und" : ""} ${item}`}</li>
            })}
            </ul>
            <div className={s.image} style={{backgroundImage: `url("/grief.jpg")`}}></div>
            </div>


        </article>

      </section></main>
      </>
    )
}