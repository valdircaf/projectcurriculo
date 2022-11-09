import styles from './Container.module.css'

function Container(props) {

    //Container para organizar o layout
    return (
        <container className={styles.container}>

            {props.children}

        </container>

    )
}

export default Container;