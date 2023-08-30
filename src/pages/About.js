import React from "react";

import WomanImg from "../img/about/woman.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">Sobre Mim</h1>
            <p className="mb-12 max-w-sm">
              Cada <b>clique</b> é uma história, um momento congelado no tempo
              que <b>ganha vida</b> com cores vibrantes, emoções palpáveis e
              detalhes vívidos.
              <br />
              <br />
              Minha <b>paixão inabalável</b> pela arte da fotografia me leva a
              capturar a essência de cada cena, transformando-a em uma narrativa
              visual que vai <b>além das palavras</b>.
            </p>
            <Link to={"/portfolio"} className="btn ">
              Veja meus trabalhos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
