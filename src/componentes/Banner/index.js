/* eslint-disable jsx-a11y/alt-text */
import styles from "./Banner.module.css";
import React, { useState, useEffect } from "react";
import Titulo from "componentes/Titulo/Titulo";


export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          <Titulo />
        </h1>
      </div>
    </div>
  )
}