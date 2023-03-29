
import styles from './PostModelo.module.css'

export default function PostModelo({ fotoCapa, children, titulo }) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}