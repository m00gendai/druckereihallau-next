import s from "@/styles/book.module.css";
import Link from "next/link";

interface bookProps {
  image: string;
  title: string;
  theBook: string;
  citation: string[];
  tagline: string;
  description: string[];
  testimonial: string;
  price: string;
}

export default function Book({
  image,
  title,
  theBook,
  citation,
  tagline,
  description,
  testimonial,
  price,
}: bookProps) {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.inner}>
        <div className={s.cover}>
          <figure className={s.image}>
            <img src={`/${image}`} />
          </figure>
        </div>
        <div className={s.content}>
          <h2 className={s.h2}>{theBook}</h2>
          <p className={s.citation}>{citation}</p>
          <p className={s.tagline}>{tagline}</p>
          <div className={s.spacer}>°</div>
          <p className={s.description}>{description}</p>
          <div className={s.spacer}>°</div>
          <p className={s.testimonial}>{testimonial}</p>
          <h3 className={s.price}>
            <Link className="button" href="/kontakt">
              <span className={s.sfr}>{price}</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
