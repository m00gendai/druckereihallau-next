import s from "@/styles/Dsgvo.module.css"

interface Dsgvo_chapter{
    title: string;
    content: string;
}

interface Dsgvo{
    imprint: string;
    chapter: Dsgvo_chapter[];
    source: string;
    modified: number;
    _mby: string
    _created: number;
    _state: number;
    _cby: string;
    _id: string;
}

interface DatenschutzProps{
    dsgvo: Dsgvo[]
}

export default function Datenschutz({dsgvo}:DatenschutzProps){

    const data: Dsgvo[] = dsgvo.filter(id =>{
        return id._id === "ee618d656637656b8c000342"
      })

    return(
        <>
        <main className="main">
            <section className="section">
                {data[0].chapter.map((item, index) =>{
                    return(
                        <article key={item.title} className={`article ${data[0].chapter.length-1 === index ? "noBorder" : ""}`}>
                            <h3 style={{wordBreak: "break-all"}}>{item.title}</h3>
                            <div className={s.text} dangerouslySetInnerHTML={{__html: item.content}}></div>
                        </article>
                    )
                })}
            </section>
        </main>
        </>
    )
}

export async function getStaticProps(){

    // the key is read-only so don't bother
    const getInfos: Response = await fetch(
      'https://cms.mrweber.ch/api/content/items/dsgvo?populate=100',
      {
        headers: {
          'api-key': `${process.env.COCKPIT_MRWEBER}`,
        },
      }
    )
    
    const dsgvo:Dsgvo[] = await getInfos.json()

return{
    props:{
        dsgvo
    }, revalidate: 10
}
}