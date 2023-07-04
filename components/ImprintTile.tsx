import s from "@/styles/imprintTile.module.css"

interface TileProps{
    title: string;
    content: string;
}

export default function ImprintTile({title, content}:TileProps){
    return(
        <div className={s.tile}>
            <div className={s.inner}>
                <h3 className={s.title}>
                    {title}
                </h3>
                <div className={s.text}>
                    {content}
                </div>
            </div>
        </div>
    )
}