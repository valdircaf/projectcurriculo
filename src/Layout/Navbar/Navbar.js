import {Link, useNavigate} from 'react-router-dom';
import styles from './Navbar.module.css';
import {FaHome} from 'react-icons/fa'
import {HiUser} from 'react-icons/hi'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import {useEffect, useState} from 'react';
import {SiGithub} from 'react-icons/si'
import {FaLinkedin} from 'react-icons/fa'
import image from '../../Images/perfil.jfif'

function Navbar({page}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        //Requisição para foto do perfil GitHub.
        fetch('http://api.github.com/users/valdircaf', {method: 'GET'})
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then((data) => {
                setData(data)
            })
            .catch((e) => {
                console.log('Err')
            })
        }, [])

    const navigate = useNavigate();

    return (
        <nav className={styles.father}>

            <section className={styles.section_img}>
                <img src={image} alt='foto de perfil'/>
                <div>
                    <h2>Valdir Castro</h2>
                    <p>Front-End Developer</p>
                </div>
            </section>

            <ul className={styles.list}>
                <li className={styles.items}>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            navigate('/')
                        }}>
                        <FaHome/>
                        <Link to='/' className={styles.home}>Home</Link>
                    </button>

                </li>
                <li className={styles.items}>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            navigate('/projects')
                        }}>
                        <HiUser/>
                        <Link to='/projects' className={styles.projects}>Projetos</Link>
                    </button>

                </li>
                <li className={styles.items}>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            navigate('/about')
                        }}>
                        <BsGrid3X3GapFill/>
                        <Link to='/about'>Sobre Mim</Link>
                    </button>

                </li>

                <li className={styles.items}>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            navigate('/skills')
                        }}>
                        <HiUser/>
                        <Link to='/skills'>Habilidades</Link>
                    </button>

                </li>
            </ul>
            <div className={styles.svg}>
                <a href='https://github.com/valdircaf' target='_blank' rel='noreferrer'><SiGithub/></a>
                <a
                    href='https://www.linkedin.com/in/valdir-castro10/'
                    target='_blank'
                    rel='noreferrer'><FaLinkedin/></a>
            </div>

        </nav>
    )
}

export default Navbar;