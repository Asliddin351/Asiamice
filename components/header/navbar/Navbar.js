import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'

import { navToggler } from '../../../redux/navbarReducer/action'

import { useTranslation } from 'react-i18next'

import Backdrop from '../../backdrop/Backdrop'





const Navbar = (props) => {


   const {t} = useTranslation()

   const links = [

    {
        id: 1,
        href: '/mice',
        text: t("links.mice")
    },

    {
        id: 2,
        href: '/tours',
        text: t("links.tours")
    },

    {
        id: 3,
        href: '/hotels',
        text: t("links.hotels")
    },

    {
        id: 4,
        href: '/about',
        text: t("links.about")
    },

    {
        id: 5,
        href: '/blog',
        text: t("links.blog")
    },

    {
        id: 6,
        href: '/contact',
        text: t("links.contacts")
        
    },

    {
        id: 7,
        href: '/memo',
        text: t("links.memo")
    }


]

    const dispatch = useDispatch()
    const router = useRouter()

    const {visible, open, active} = props

 

    const [navOpen, setNavOpen] = useState(open)

    const [logoVisible, setLogoVisible] = useState(visible)

    const [isActive, setIsActive] = useState(active)

    const navbarToggle = () => {
        dispatch(navToggler(setNavOpen(!navOpen)))
    }



    

    return (
        

        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Link href={'/'}><a ><img src={'/asiamice.svg'} className={styles.logo}/></a></Link>
                    <ul className={`${styles.menu} ${navOpen ? `${styles.menu__right} menu_scroll` : ''}`}>
                        {links.map(item=>{
                            return <li key={item.id} className={styles.item}> <Link href={item.href}><a className={styles.link}>{item.text}</a></Link> </li>
                        })}
                    </ul>

                    {navOpen === true ? <Backdrop hide={navbarToggle}/> : null}


                    <div className={styles.navbar_right}>
                            <button className={`${styles.menu__icon} ${navOpen ?  `${styles.close__menu}` : `${styles.open__menu}`}`} onClick={navbarToggle}><i className="fas fa-bars"></i></button>
                            <button className={`${styles.menu__icon} ${navOpen ? `${styles.open__menu}` : `${styles.close__menu}`}`} onClick={navbarToggle}><i className="fas fa-times"></i></button>
                    </div>

                </div>
            </div>
        </nav>
    )
}


const mapStateToProps = (state) => ({
    visible: state.navbar.visible,
    open: state.navbar.open,
    active: state.navbar.active,
    ln: state.navbar.ln
})

const mapDispatchToProps = { navToggler }


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


