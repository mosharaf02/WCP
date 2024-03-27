import React from "react";
import "./home.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1 className="homeTitle">Web Cell Point</h1>
        <p className="homeDec">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been ts standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className="homeBtn">
          <button className="homeBtns">Learn More</button>
          <button className="homeBtns">Contact</button>
        </div>
        <div className="brands">
          <Image src="/brands.png" alt="" fill className="brandImg" />
        </div>
      </div>
      <div className="homeImage">
        <Image src="/hero.gif" alt="" fill className="heroImg" />
      </div>
    </div>
  );
};

export default Home;
