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
    <main className={styles.main}>
      {routing.map((item, index) => <Link href={item.link} key={index}>{item.name}</Link>)}
    </main>
  );
}
