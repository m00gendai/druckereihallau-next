import s from "@/styles/bookTeaser.module.css"
import Link from "next/link"

export default function BookTeaser({book} :{book: string}){
    
    return(
        <div className={s.container}>
            <div className={s.thumb} style={{backgroundImage: `url("/buch_${book}.jpg")`}}>
            </div>
            <Link href={`/buecher#${book}`} className="button">
                {
                    book === "hallau" ? "Hallau" 
                    : book === "gass" ? "Hallauer Gässlibuch" 
                    : book === "alltaegliches" ? "Hallau - Alltägliches betrachten!" 
                    : null
                }
            </Link>
        </div>
    )
}