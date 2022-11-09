import styles from './Projects.module.css'

function Projects() {
    return (
        <section className={styles.all}>
            <h1>PROJETOS</h1>
            <section className={styles.father}>

                <div className={styles.elements}>
                    <p>EM BREVE</p>
                </div>
                <div className={styles.elements}>
                    <p>EM BREVE</p>
                </div>
                <div className={styles.elements}>
                    <p>EM BREVE</p>
                </div>

            </section>
            <button>
                <a href='https://github.com/valdircaf' target='_blank' rel='noreferrer'>Ver Mais</a>
            </button>
            <p>(Repositório GitHub)</p>
        </section>

    )
}

export default Projects;