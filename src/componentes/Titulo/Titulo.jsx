import React, { useState, useEffect } from "react";

export default function Titulo() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setVisible((prevVisible) => !prevVisible);
      }, 1500); // intervalo de 1 segundo
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const titleStyle = {
      opacity: visible ? 1 : 0,
      transition: "opacity 1s ease-in-out",
    };
  
    return (
      <div>
        <h1 style={titleStyle}>Beatriz e Guilherme</h1>
      </div>
    );
  }