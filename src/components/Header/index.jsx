import Link from "next/link"
import Image from "next/image"
import logoImg from "@/public/images/logo.png"
import styles from "./Header.module.css"
const MainHeader = () => {
    return (
        <header>

            <Link href="/" >
                <Image src={logoImg}  className={styles.logo} priority/>

            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Browse Meals</Link>
                    </li>
                </ul>
            </nav>
        </header>


    )
}

export default MainHeader