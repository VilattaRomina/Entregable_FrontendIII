import React from 'react';
import { HeaderStyle } from '../styles/Styles';

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({ count }) {

  return (
    <HeaderStyle>
      <h1>CARRITO DE COMPRAS</h1>
      <p>Cantidad de productos<span>{count}</span></p>
    </HeaderStyle>
  )
}
