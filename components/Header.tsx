import Head from "next/head"

export default function Header(props){
    return(
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.content} />
            <meta name="twitter:image" content="" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.content} />
            <meta property="og:url" content={props.url} />
            <meta property="og:image" content="" />
            <link rel="icon" href="" />
        </Head>
    )
}