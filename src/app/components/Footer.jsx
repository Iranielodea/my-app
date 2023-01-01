import React from "react";

export default function Footer() {
  var ano = new Date().getFullYear();

  return (
    <section id="footer">
      <div>
        <ul class="list-unstyled list-inline social text-center">
          <li class="list-inline-item">
            <a href="#">
              <i class="fa fa-facebook fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <i class="fa fa-twitter fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <i class="fa fa-instagram fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" target="_blank">
              <i class="fa fa-envelope fa-2x"></i>
            </a>
          </li>
        </ul>
        <a href="mailto:iranielodea@hotmail.com">iranielodea@hotmail.com</a>
        <p>Desenvolvido por 99 Coders - {ano}</p>
      </div>
    </section>
  );
}

// https://bootsnipp.com/
