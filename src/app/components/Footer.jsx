import React from "react"

export default function Footer() {

  var ano = new Date().getFullYear();

  return (
    <p>Desenvolvido por 99 Coders - {ano}</p>
  )
}