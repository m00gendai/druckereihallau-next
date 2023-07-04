import Head from "next/head"

export default function Header({title, content, url}:{title: string; content: string; url: string;}){
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="twitter:card" content="/logo.jpg" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={content} />
            <meta name="twitter:image" content="/logo.jpg" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={content} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content="/logo.jpg" />
            <link rel="icon" href="/logo.png" />
        </Head>
    )
}