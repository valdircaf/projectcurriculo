import styles from './Skills.module.css'
import {FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaCss3Alt} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'

function Skills() {

    return (
        <section className={styles.father}>
            <h2>Habilidades</h2>
            <div>
                <p className={styles.firstP}>PASSE O CURSOR DO MOUSE POR CIMA DO ICONE PARA VER O NÍVEL DE HABILIDADE.</p>
            </div>

            <div className={styles.icons}>

                <div className={styles.iconsList}>

                    <div>
                        <FaReact className={styles.react}/>
                        <p>React
                            <br/>
                            <br/>O React é uma biblioteca front-end JavaScript de código aberto com foco em
                                criar interfaces de usuário em páginas web
                            <br/>
                            <br/>
                            <span>
                                2 meses
                                <br/>de experiência com a tecnologia.</span>
                        </p>

                    </div>
                </div>
                <div className={styles.iconsList}>

                    <div>
                        <SiJavascript className={styles.js}/>
                        <p>JavaScript
                            <br/>
                            <br/>
                            JavaScript é uma linguagem de programação interpretada estruturada, de script em
                            alto nível com tipagem dinâmica fraca e multiparadigma.
                            <br/>
                            <br/>
                            <span>
                                5 meses
                                <br/>de experiência com esta tecnologia.</span>
                        </p>

                    </div>

                </div>
                <div className={styles.iconsList}>

                    <div>
                        <FaCss3Alt className={styles.css}/>
                        <p>CSS
                            <br/>
                            <br/>
                            Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.
                            <br/>
                            <br/>
                            <span>
                                1 ano e 5 meses
                                <br/>de experiência com esta tecnologia.</span>
                        </p>
                    </div>

                </div>
                <div className={styles.iconsList}>

                    <div>
                        <AiFillHtml5 className={styles.html}/>
                        <p>HTML
                            <br/>
                            <br/>
                            É uma linguagem de marcação utilizada na construção de páginas Web.
                            <br/><br/>
                            <span>
                                1 ano e 5 meses
                                <br/>de experiência com esta tecnologia.</span>
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Skills;