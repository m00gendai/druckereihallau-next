import s from "@/styles/footer.module.css"
import Link from "next/link"

export default function Footer(){

    const date = new Date()
    const currentYear = date.getFullYear()

    return(
        <footer>
            <div className={s.details}>
                <p>Druckerei Hallau</p>
                <p>Inh. Max Weber</p>
                <p>Hautpstrasse 26</p>
                <p>8215 Hallau</p>
                <p>Tel 052 681 31 29</p>
                <p>Fax 052 681 40 06</p>
                <p>druck.hallau@datacomm.ch</p>
                <p>www.druckereihallau.ch</p>
            </div>
            <div className={s.copyright}>
                <p>Öffnungszeiten:</p>
                <p>Montag bis Freitag 8:00 bis 12:00 und 14:00 bis 17:30</p>
                <p>Terminvereinbarungen ausserhalb der Öffnungszeiten möglich</p>
                <p>{`© 2017-${currentYear} Druckerei Hallau`}</p>

            </div>
            <div className={s.menu}>
                <Link className={s.link} href="/">Home</Link>
                <Link className={s.link} href="/drucksachen">Drucksachen</Link>
                <Link className={s.link} href="/speziealangebote">Spezialangebote</Link>
                <Link className={s.link} href="/buecher">Bücher</Link>
                <Link className={s.link} href="/kontakt">Kontakt</Link>
            </div>
        </footer>
    )
}