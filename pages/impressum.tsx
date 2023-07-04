import Header from "@/components/Header";
import ImprintTile from "@/components/ImprintTile";
import s from "@/styles/Impressum.module.css"

export default function Impressum(){
    return(
        <>
      <Header
        title={"Impressum"}
        content={
          "Impressum"
        }
        url={"https://druckerei-hallau.ch/impressum"}
      />
      <main className="main">
        <section className="section">
            <article className="article">
            <div className={s.tileContainer}>
                <ImprintTile 
                    title={`Vertretungsberechtigte Personen`}
                    content={`
                    Max Weber
                    Wisla Weber
                    `}/>
                    <ImprintTile 
                    title={`Handelsregistereintrag`}
                    content={`
                    Eingetragener Firmenname: Druckerei Hallau
                    Nummer: CHE-280.022.535
                    Handelsregisteramt: Hallau
                    `}/>
                    <ImprintTile 
                    title={`Mehrwertsteuernummer`}
                    content={`
                    CHE-280.022.535 MWST
                    `}/>
                    <ImprintTile
                    title={`Eigentümer Webseite`}
                    content={`
                    Druckerei Hallau
                    Hauptstrasse 26
                    8215 Hallau
                    Schweiz
                    druck.hallau@datacomm.ch
                    `} />
                    <ImprintTile
                    title={`Verantwortlicher Webseite`}
                    content={`
                    mrweber.ch
                    Marcel Weber
                    8215 Hallau
                    Schweiz
                    info@mrweber.ch
                    `} />
                    <ImprintTile
                    title={`Hosting Webseite`}
                    content={`
                    Netlify, Inc.
                    44 Montgomery Street
                    Suite 300
                    San Francisco
                    California 94104
                    USA
                    https://www.netlify.com/
                    `} />
                    <ImprintTile
                    title={`Mailverkehr über`}
                    content={`
                    cyon GmbH
                    Brunngässlein 12
                    4052 Basel
                    Schweiz
                    https://www.cyon.ch
                    `} />
                    <ImprintTile
                    title={`Versionskontrolle & Quellcode`}
                    content={`
                    GitHub, Inc.
                    88 Colin P Kelly Junior Street
                    San Francisco
                    California 94107
                    USA
                    https://github.com
                    `} />
            </div>
            </article>
            <article className="article noBorder">
            Haftungsausschluss
Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.

Haftung für Links
Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.

Urheberrechte
Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Druckerei Hallau oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </article>
        </section>
    </main>
    </>
    )
}