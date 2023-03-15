import { useState, useEffect } from "react"
import Link from "next/link"
import s from "@/styles/navbar.module.css"

export default function Navbar(){

    const [overTrigger, setOverTrigger] = useState(false) // checks if cursor is over trigger link
    const [visible, setVisible] = useState(false) // checks if submenu is visible

    function handleSubMenuTrigger(e){
        if(e.type == "mouseenter"){
            setOverTrigger(true)
        } else if(e.type == "mouseleave"){
            setOverTrigger(false)
        }
    }

    useEffect(()=>{
        if(overTrigger){
            setVisible(true)
        }
        if(!overTrigger){
            setVisible(false)
        }
    },[overTrigger])


    return(
        <nav className ={s.nav}>
            <div className={s.linkContainer}>
                <Link className={s.link} href="/">Home</Link>
                <Link className={s.link} href="/drucksachen">Drucksachen</Link>
                <Link className={s.link} href="/speziealangebote">Spezialangebote</Link>
                <Link className={s.link} href="/buecher">Bücher</Link>
                <Link className={s.link} href="/kontakt">Kontakt</Link>
                <Link className={s.homeLink} href="/"></Link>
            </div>
        </nav>
    )
}