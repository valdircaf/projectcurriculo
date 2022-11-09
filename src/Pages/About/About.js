import styles from './About.module.css';
import image from '../../Images/southpark.png'
import imageReact from '../../Images/react.png'
import imageCss from '../../Images/css.png'
import imageJs from '../../Images/js.png'

function About() {

    return (

        <arcticle className={styles.father}>

            <h1>Sobre Mim</h1>

            <div className={styles.paragraphs}>
                <img src={image} alt='Southpark'/>
                <p>
                    <p>Olá! Me chamo Valdir. Sou desenvolvedor Front-End, tenho 25 anos e curso
                        Ciências da Computação no 5º período.</p>
                    <p>Me encantei pela programação em meados de 2019, enquanto passávamos por uma
                        pandemia. Minha primeira linguagem foi o C++, depois partindo para o C e
                        posteriormente para HTML, CSS, JavaScript e React, passando por cursos da
                        RocketSeat, Udemy, Faculdade e até mesmo youtube.
                    </p>
                    <p>
                        Sou autodidata em Inglês, onde possuo nível avançado
                    </p>

                    <p>
                        Atualmente Procuro minha primeira vaga na área de desenvolvimento.
                    </p>
                </p>

            </div>
            <div className={styles.logos}>
                <img src={imageReact} alt='imagem react'/>
                <img src={imageCss} alt='imagem react'/>
                <img src={imageJs} alt='imagem react'/>
            </div>
        </arcticle>

    )
}

export default About;