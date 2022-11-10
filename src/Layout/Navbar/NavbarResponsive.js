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
                <li>
                    <Link to='/' onClick={active}>Início</Link>

                </li>
                <li>
                    <Link to='/projects' onClick={active}>Projetos</Link>

                </li>
                <li>
                    <Link to='/about' onClick={active}>Sobre Mim</Link>

                </li>
                <li>
                    <Link to='/skills' onClick={active}>Habilidades</Link>

                </li>
            </ul>
        </nav>

    )
}

export default NavbarResponsive