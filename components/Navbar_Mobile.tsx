import { useState, useEffect } from "react";
import Link from "next/link";
import s from "../styles/navbar_mobile.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

export default function Navbar_Mobile() {
  const [overTrigger, setOverTrigger] = useState<boolean>(false); // checks if cursor is over trigger link
  const [visible, setVisible] = useState<boolean>(false); // checks if submenu is visible

  const handleSubMenuTrigger = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => {
    if (event.type == "mouseenter") {
      setOverTrigger(true);
    } else if (event.type == "mouseleave") {
      setOverTrigger(false);
    } else {
      // for click events
      setVisible(!visible);
    }
  };

  useEffect(() => {
    // this needs to be a useEffect because if its handled in the handleSubMenuTrigger() it doesn't work reliably
    if (overTrigger) {
      setVisible(true);
    }
    if (!overTrigger) {
      setVisible(false);
    }
  }, [overTrigger]);

  return (
    <nav className={s.nav}>
      {visible ? null : (
        <div className={s.homeLink}>
          <Link className={s.homeLinkLogo} href="/"></Link>Druckerei Hallau
        </div>
      )}
      <div className={s.menu} onClick={handleSubMenuTrigger}>
        {visible ? (
          <LocalDiningIcon
            sx={{
              color: "black",
              fontSize: "5vh",
            }}
          />
        ) : (
          <LunchDiningIcon
            sx={{
              color: "black",
              fontSize: "5vh",
            }}
          />
        )}
      </div>
      {visible ? (
        <div className={s.linkContainer}>
          <Link className={s.link} onClick={handleSubMenuTrigger} href="/">
            Home
          </Link>
          <Link
            className={s.link}
            onClick={handleSubMenuTrigger}
            href="/drucksachen"
          >
            Drucksachen
          </Link>
          <Link
            className={s.link}
            onClick={handleSubMenuTrigger}
            href="/spezialangebote"
          >
            Spezialangebote
          </Link>
          <Link
            className={s.link}
            onClick={handleSubMenuTrigger}
            href="/buecher"
          >
            Bücher
          </Link>
          <Link
            className={s.link}
            onClick={handleSubMenuTrigger}
            href="/kontakt"
          >
            Kontakt
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
