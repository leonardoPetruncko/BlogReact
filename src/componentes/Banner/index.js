/* eslint-disable jsx-a11y/alt-text */
import styles from "./Banner.module.css";
import React, { useState, useEffect } from "react";
import Titulo from "componentes/Titulo/Titulo";


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h4 className={styles.titulo}>
          <Titulo />
        </h4>
      </div>
    </div>
  )
}