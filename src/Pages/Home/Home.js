import styles from './Home.module.css'
import image from '../../Images/background.jpg'
import {useNavigate} from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <section className={styles.father}>
            <img src={image} alt='background'/>
            <div>
                <h2>Olá, Me chamo 
                    <span> Valdir Castro!</span>
                </h2>
                <p>Sou Front-End Developer e este website foi desenvolvido por mim, a fins de
                    currículo/portifólio.</p>
                <button
                    onClick={() => {
                        navigate('/projects')
                    }}>Seguir para Projetos</button>
            </div>

        </section>
    )
}

export default Home;