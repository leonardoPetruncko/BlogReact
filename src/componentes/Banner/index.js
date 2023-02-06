import styles from "./Banner.module.css";
import circuloColorido from  'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
   return (
      <div className={styles.Banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá, Mundo! dale
            </h1>

            <p  className={styles.paragrafo}>
                Boas Vindas ao meu blog, Eu sou Leonardo Petruncko tenho 20 anos...
            </p>
        </div>

        <div className={styles.imagens}>
            <img
              className={styles.circuloColorido}
              src={circuloColorido}
              aria-hidden={true}
            />

            <img 
                className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto do evaldo"
            />
        </div>
      </div>
   )
}