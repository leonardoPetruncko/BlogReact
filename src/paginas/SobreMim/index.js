import styles from './SobreMim.module.css'

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
  return (
    <PostModelo
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        olá, eu sou o Antônio!
      </h3>

      <img
        src={fotoSobreMim}
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento daleOba casamento daleOba casamento daleOba casamento daleOba casamento dale v v v Oba casamento dale vOba casamento daleOba casamento daleOba casamento daleOba casamento dalev v Oba casamento daleOba casamento dale
      </p>
      <p className={styles.paragrafo}>
        Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento daleOba casamento daleOba casamento daleOba casamento daleOba casamento dale v v v Oba casamento dale vOba casamento daleOba casamento daleOba casamento daleOba casamento dalev v Oba casamento daleOba casamento dale
      </p>
      <p className={styles.paragrafo}>
        Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento daleOba casamento daleOba casamento daleOba casamento daleOba casamento dale v v v Oba casamento dale vOba casamento daleOba casamento daleOba casamento daleOba casamento dalev v Oba casamento daleOba casamento dale
      </p>
      <p className={styles.paragrafo}>
        Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento daleOba casamento daleOba casamento daleOba casamento daleOba casamento dale v v v Oba casamento dale vOba casamento daleOba casamento daleOba casamento daleOba casamento dalev v Oba casamento daleOba casamento dale
      </p>
      <p className={styles.paragrafo}>
        Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento daleOba casamento daleOba casamento daleOba casamento daleOba casamento dale v v v Oba casamento dale vOba casamento daleOba casamento daleOba casamento daleOba casamento dalev v Oba casamento daleOba casamento dale
      </p>
      <p className={styles.paragrafo}>
        Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento dale Oba casamento daleOba casamento daleOba casamento daleOba casamento daleOba casamento dale v v v Oba casamento dale vOba casamento daleOba casamento daleOba casamento daleOba casamento dalev v Oba casamento daleOba casamento dale
      </p>

    </PostModelo>

  )
}
