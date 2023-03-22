/* eslint-disable jsx-a11y/alt-text */
import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Beatriz e Guilherme
        </h1>
      </div>
    </div>
  )
}