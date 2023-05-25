import React, { useEffect } from "react";
import { NavbarFull } from "./Component Full/NavbarFull";
import { ImgFull } from "./Component Full/ImgFull";
import { AboutFull } from "./Component Full/AboutFull";
import { BaseStats } from "./Component Full/BaseStats";

export const PokemonFullScreen = (props) => {
  return (
    <div>
      <p>FullScreens</p>
      <NavbarFull />
      <ImgFull />
      <AboutFull />
      <BaseStats />
    </div>
  );
};
