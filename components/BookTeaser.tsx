import s from "@/styles/bookTeaser.module.css"

export default function BookTeaser({book} :{book: string}){
    return(
        <div className={s.container}>
            <div class={s.thumb} style={{backgroundImage: `url("/buch_${book}.jpg")`}}>
            </div>
            <button className={s.button}>
                {
                    book === "hallau" ? "Hallau" 
                    : book === "gass" ? "Hallauer Gässlibuch" 
                    : book === "alltaegliches" ? "Hallau - Alltägliches betrachten!" 
                    : null
                }
            </button>
        </div>
    )
}