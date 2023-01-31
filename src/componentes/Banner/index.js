import styles from "./Banner.module.css";

export default function Banner() {
   return (
      <div className={styles.Banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo!
            </h1>

            <p  className={styles.paragrafo}>

            </p>

        </div>
      </div>
   )
}