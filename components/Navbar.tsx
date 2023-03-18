import { useState, useEffect } from "react";
import Link from "next/link";
import s from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.linkContainer}>
        <Link className={s.link} href="/">
          Home
        </Link>
        <Link className={s.link} href="/drucksachen">
          Drucksachen
        </Link>
        <Link className={s.link} href="/spezialangebote">
          Spezialangebote
        </Link>
        <Link className={s.link} href="/buecher">
          Bücher
        </Link>
        <Link className={s.link} href="/kontakt">
          Kontakt
        </Link>
        <Link className={s.homeLink} href="/"></Link>
      </div>
    </nav>
  );
}
