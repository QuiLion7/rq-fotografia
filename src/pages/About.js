import React, { useContext } from "react";

import WomanImg from "../img/about/woman.png";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section pr-2 pl-2"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
