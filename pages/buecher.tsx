import Header from "@/components/Header";
import Book from "@/components/Book";

interface isBook {
  image: string;
  title: string;
  theBook: string;
  citation: string[];
  tagline: string;
  description: string[];
  testimonial: string;
  price: string;
}

const book1: isBook = {
  image: "buch_hallau.jpg",
  title: "Hallau!",
  theBook: "Das Erfolgsbuch!",
  citation: [
    "(über 450 verkaufte Exemplare) Farbiges, reich bebildertes Buch über Hallau – 140 Seiten",
    "\n",
    "Herausgeberin: Druckerei Hallau, 2014",
  ],
  tagline:
    "Geschichtliches, Wissenswertes, Interessantes, Kurioses, Unbekanntes und Einmaliges über Hallau!",
  description: [
    "Im Jahre 2014 – aus Anlass der 950-Jahr-Feier der Erst-Erwähnung von Hallau – hat die Druckerei Hallau ein voluminöses Werk über Hallau herausgegeben: Ein unerschöpflicher Fundus mit einem Thema: Hallau!",
    "\n\n",
    "Dieses Werk ist anders als eine traditionelle Dorfgeschichte und sprengt in seiner Vielseitigkeit herkömmliche Formen. Es ist so lebendig wie sein behandelter «Gegenstand» – Hallau – selbst. Wer ein Dokument des prallen Lebens geniessen, wer unzählige Entdeckungen machen oder wer ein Wiedersehen mit Vergangenem, Erinnertem, mit der Buntheit der Geschichte machen will, der wird mit diesem Buch auf seine Kosten kommen.",
  ],
  testimonial:
    "«Hallau!» ist eine herausragende Sammlung von Hallauer Fakten, Hallauer Erscheinungen und Hallauer Erlebnissen!",
  price: "Fr 30.-",
};

const book2: isBook = {
  image: "buch_gass.jpg",
  title: "Hallauer Gässlibuech",
  theBook: "Das beliebte Buch!",
  citation: [
    "(über 270 verkaufte Exemplare) Reich bebildertes Buch über die faszinierende Welt der Hallauer Gassen und Gässli – 96 Seiten",
    "\n",
    "Herausgeberin: Druckerei Hallau, 2015",
  ],
  tagline: "Alltägliches betrachten!",
  description: [
    "Erstmals in jüngerer Zeit sind die Hallauer Gassen und Gässli, Wege und Wegli, Tunnel und Durchgänge, Treppen und Stiegen in einem Buch beschrieben und mit über 300 Aufnahmen bebildert worden.",
    "\n\n",
    "Das «Hallauer Gässlibuech» soll gleichsam die auswärtigen Gäste als auch die «Einheimischen» auf einer erlebnisreichen Erkundung abseits der üblicherweise im Rampenlicht stehenden Hauptstrasse begleiten. Die beschriebenen Gässli im Buch nur zu betrachten ist eine Sache; dieselben vor Ort zu entdecken, die Schönheiten links und rechts des Weges zu bestaunen, etwas ganz anderes. Das «Hallauer Gässli-Buech» lädt dazu ein.",
  ],
  testimonial: "",
  price: "Fr 20.-",
};

const book3: isBook = {
  image: "buch_alltaegliches.jpg",
  title: "Hallau - Alltägliches betrachten!",
  theBook: "Das besondere Buch!",
  citation: [
    "(über 80 verkaufte Exemplare) Farbiges Buch über Hallaus unscheinbare, verborgene und alltägliche Kostbarkeiten – 92 Seiten",
    "\n",
    "Herausgeberin: Druckerei Hallau, 2016",
  ],
  tagline: "Alltägliches betrachten!",
  description: [
    "HALLAU – ein kleines Gebilde auf der Landkarte! Dieses Gebilde trägt viele Kostbarkeiten, Schmuckstücke und Wertvolles in sich. Dieses Buch ist ein Begleiter, um einige dieser Kostbarkeiten zu zeigen, zu beschreiben und um das Gebilde Hallau mit einer anderen Betrachtungsweise erfahren zu dürfen. Es ist nicht eine gesamthafte Aufzählung dessen, was es in Hallau alles an Kostbarkeiten gibt, sondern vielmehr ein kleiner Ausschnitt dessen, was das Füllhorn Hallau bietet!",
  ],
  testimonial: "",
  price: "Fr 25.-",
};

export default function Books() {
  return (
    <>
      <Header
        title={"Bücher"}
        content={
          "Bücher über Hallau: Hallau!, Hallauer Gässlibuch, Hallau - Alltägliches betrachten!"
        }
        url={"https://druckerei-hallau.ch/buecher"}
      />
      <main className="main">
        <section className="section">
          <article className="article">
            <Book {...book1} />
          </article>
          <article className="article">
            <Book {...book2} />
          </article>
          <article className="article noBorder">
            <Book {...book3} />
          </article>
        </section>
      </main>
    </>
  );
}
