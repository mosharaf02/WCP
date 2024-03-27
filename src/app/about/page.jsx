import React from "react";
import Image from "next/image";
import "./about.css";
const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutText">
        <h2 className="aboutTitle">About Agency</h2>
        <h1 className="aboutSubTitle">
          We create digital ideas that are bigger,bolder,braver and better
        </h1>
        <p className="aboutDec">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
          laborum ratione omnis facere quae, assumenda perferendis vero
          recusandae quod doloribus porro cupiditate voluptates atque officia
          tempora, obcaecati aperiam! Possimus, autem!
        </p>
        <div className="aboutBoxs">
          <div className="aboutBox">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="aboutBox">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="aboutBox">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="aboutImg">
        <Image className="aboutImgs" src="/about.png" alt="About Imges" fill />
      </div>
    </div>
  );
};

export default AboutPage;
