import Header from "@/components/Header";
import ImprintTile from "@/components/ImprintTile";
import s from "@/styles/Impressum.module.css"

interface Imprint_tile{
  title: string;
  address: string;
  url: string;
  _model: string;
  _id: string;
}

interface Imprint_field{
  title: string;
  content: string;
}

interface Imprint{
  tiles: Imprint_tile[];
  field: Imprint_field[];
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
}

interface ImprintProps{
  imprint:Imprint[];
}

export default function Impressum({imprint}:ImprintProps){

  const data: Imprint[] = imprint.filter(id =>{
    return id._id === "1a8a4bbf343531d58d000086"
  })


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
            {data[0].tiles.map(tile=>{
              return <ImprintTile title={tile.title} content={tile.address} url={tile.url}/>
              })
            }
            </div>
            </article>
            {data[0].field.map((fld, index) =>{
                        return (
                            <article className={`article ${data[0].field.length-1 === index ? "noBorder" : ""}`} key={fld.title}>
                                <h3 >{fld.title}</h3>
                                <div className={s.text} dangerouslySetInnerHTML={{__html: fld.content}}></div>
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
  const getProjects: Response = await fetch(
    'https://cms.mrweber.ch/api/content/items/imprint?populate=100',
    {
      headers: {
        'api-key': `${process.env.COCKPIT_MRWEBER}`,
      },
    }
  )
  
  const imprint:Imprint[] = await getProjects.json()

  return{
    props:{
        imprint
    }, revalidate: 10
}
}