import Banner from "./banner";
import Navbar from "./navbar/Navbar";
import styles from './header.module.css'

import {useRouter} from 'next/router'
import TopBlock from "./topblock/TopBlock";


const Header = () => {

    const router = useRouter()

    const url = router.pathname


    return (
        <>
            <TopBlock/>
            <Navbar/>          
            <header  className={
                url === "/" ? `${styles.header}` :
                url === "/mice"  ? `${styles.header_mice}` : 
                url === '/tours' ? `${styles.header_tours}`:
                url === '/about' ? `${styles.heder_about}` :
                url === '/contact' ? `${styles.header_contact}` :
                url === '/faq' ? `${styles.header_faq}` :
                url === "/memo" ? `${styles.header_memo}` :
                url === "/blog" ? `${styles.header_blog}` :
                url === "/hotels" ? `${styles.header_hotels}` :
                    `${styles.header_tour}`}>
                <Banner/>
            </header>
        </>
    )
}

export default Header;