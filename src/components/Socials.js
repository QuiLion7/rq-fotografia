import React, { useContext } from "react";

import { ImFacebook, ImInstagram } from "react-icons/im";

import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24 "
    >
      <ul>
        <li className="flex gap-x-4">
          <a href="https://www.instagram.com/rqfotografia/" target="_blanck">
            <ImInstagram />
          </a>
          <a href="https://www.facebook.com/rqfotografia7/" target="_blanck">
            <ImFacebook />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
