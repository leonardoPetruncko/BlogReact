import styles from './NaoEncontrada.module.css'

export default function NaoEncontrada() {
    return (
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>

            <h1 className={styles.titulo}>
                Ops! Página não encontrada.
            </h1>

            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando?
            </p>

            <p className={styles.paragrafo}>
                Recarregue a página, ou volte para a página inicial.
            </p>
        </div>
        </>
    )
};
