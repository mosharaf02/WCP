import React from "react";
import Image from "next/image";
import "./single.css";
const SinglePostPage = () => {
  return (
    <div className="singleContainer">
      <div className="singleImg">
        <Image
          className="singleImgs"
          src="https://images.pexels.com/photos/19992969/pexels-photo-19992969/free-photo-of-a-woman-standing-in-front-of-an-old-building.jpeg"
          alt="img"
          width={100}
          height={700}
        />
      </div>
      <div className="singleText">
        <h1 className="singleTitle">title</h1>
        <div className="singleDetail">
          <Image
            className="singleAvatar"
            src="https://images.pexels.com/photos/17867773/pexels-photo-17867773/free-photo-of-buck-and-deer-on-grassland.jpeg"
            alt="img"
            width={50}
            height={50}
          />
          <div className="singleDatailText">
            <span className="singleDetailTitle">Author</span>
            <span className="singleDetailValue">Jacks Parow</span>
          </div>
          <div className="singleDatailText">
            <span className="singleDetailTitle">Published</span>
            <span className="singleDetailValue">01.02.2024</span>
          </div>
        </div>
        <div className="singleContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          labore odit qui, omnis reprehenderit animi ea quae assumenda
          aspernatur fugiat suscipit vitae provident ex dolor soluta? Voluptas
          iusto a voluptatum?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
