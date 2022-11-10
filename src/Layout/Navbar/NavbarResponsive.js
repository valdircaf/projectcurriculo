import {Link} from 'react-router-dom'
import styles from './NavbarResponsive.module.css'
import {useState} from 'react'
import {BiMenu} from 'react-icons/bi'
import {VscClose} from 'react-icons/vsc'

function NavbarResponsive() {
    //State para o button
    const [closed, setClosed] = useState(true)
    const [active, setActive] = useState(false);
    const toggleMode = () => {
        setActive(!active)
        setClosed(!closed)
    }

    return (
        <nav
            className={active
                ? styles.father
                : styles.fatherClosed}>
            <ul
                className={active
                    ? styles.hamburguerOpen
                    : styles.menu}
                onClick={toggleMode}>

                <li
                    className={!active
                        ? styles.show
                        : styles.close}>
                    <BiMenu/>
                </li>

                <li
                    className={active
                        ? styles.showX
                        : styles.close}>
                    <VscClose/>
                </li>
            </ul>

            <ul
                className={active
                    ? styles.menuOpen
                    : styles.options}>
                <li onClick={()=>{setActive(false)}}>
                    <Link to='/'>Início</Link>

                </li>
                <li onClick={()=>{setActive(false)}}>
                    <Link to='/projects'>Projetos</Link>

                </li>
                <li onClick={()=>{setActive(false)}}>
                    <Link to='/about'>Sobre Mim</Link>

                </li>
                <li onClick={()=>{setActive(false)}}>
                    <Link to='/skills'>Habilidades</Link>

                </li>
            </ul>
        </nav>

    )
}

export default NavbarResponsive