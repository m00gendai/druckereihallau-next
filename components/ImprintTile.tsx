import s from "@/styles/imprintTile.module.css"
import Link from "next/link";

interface TileProps{
    title: string;
    content: string;
    url: string;
}

export default function ImprintTile({title, content, url}:TileProps){
    return(
        <div className={s.tile}>
            <div className={s.inner}>
                <h3 className={s.title}>
                    {title}
                </h3>
                <div className={s.text} dangerouslySetInnerHTML={{__html: content}}>
                </div>
                {url === null ? null  : <Link className={s.link} href={url} target="_blank">{url}</Link>}
            </div>
        </div>
    )
}