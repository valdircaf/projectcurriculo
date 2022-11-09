import {Link} from 'react-router-dom'
import styles from './NavbarResponsive.module.css'
import {useState} from 'react'
import {BiMenu} from 'react-icons/bi'

function NavbarResponsive() {
    //State para o button
    const [active, setActive] = useState(false);
    const toggleMode = () => {
        setActive(!active)
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

                <li>
                    <BiMenu/>
                </li>
            </ul>

            <ul
                className={active
                    ? styles.menuOpen
                    : styles.options}>
                <li>
                    <Link to='/'>Início</Link>

                </li>
                <li>
                    <Link to='/projects'>Projetos</Link>

                </li>
                <li>
                    <Link to='/about'>Sobre Mim</Link>

                </li>
                <li>
                    <Link to='/skills'>Habilidades</Link>

                </li>
            </ul>
        </nav>

    )
}

export default NavbarResponsive