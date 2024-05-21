import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const routing= [
  {
    name: "meals",
    link: "/meals"
  },
  {
    name: "share meals",
    link: "/meals/share"
  },
  {
    name: "community",
    link: "/community"
  },
]

export default function Home() {
  return (
    <>
      <header>
        <daa className={styles.slideshow}>
      
        </daa>
        <dbb className={styles.hero}>
          <h1>NexLevel for next level Foodies</h1>
          <p>Taste and share food from all over the world!</p>
        </dbb>
        <dcc className={styles.cta}>
          <Link href="/community"> Join the community</Link>
          <Link href="/meals"> Explore meals</Link>
        </dcc>
      </header>
      <main className={styles["main"]}>
      {routing.map((item, index) => <Link href={item.link} key={index}>{item.name}</Link>)}
      </main>
    </>
  );
}
