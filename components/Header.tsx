import Head from "next/head"

export default function Header({title, content, url}:{title: string; content: string; url: string;}){
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={content} />
            <meta name="twitter:image" content="" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={content} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="" />
            <link rel="icon" href="" />
        </Head>
    )
}