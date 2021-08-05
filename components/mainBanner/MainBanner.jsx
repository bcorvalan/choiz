import React from "react";
import NavBar from "../navBar/NavBar";
import Circle from "../svgs/Circle";
import Heart from "../svgs/Heart";
import Doctor from "../svgs/Doctor";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <NavBar />
      <div className="main-banner__circle-decoration">
        <Circle />
      </div>
      <h1 className="main-banner__title">
        Cuidarte siempre te cuesta menos con Choiz
      </h1>
      <div className="main-banner__heart">
        <Heart />
      </div>
      <div className="main-banner__doctor">
        <Doctor />
      </div>
    </div>
  );
}
