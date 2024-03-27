import React from "react";
import "./postCard.css";
import Image from "next/image";
import Link from "next/link";
const postCard = () => {
  return (
    <div className="postContainer">
      <div className="postTop">
        <div className="postImage">
          <Image
            src="https://images.pexels.com/photos/17867773/pexels-photo-17867773/free-photo-of-buck-and-deer-on-grassland.jpeg"
            fill
            alt="img"
            className="postImg"
          />
        </div>
        <span className="postDate">01.01.2024</span>
      </div>
      <div className="postBottom">
        <h1 className="postTitle">Title</h1>
        <p className="postDoc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          molestiae explicabo, minus, reiciendis pariatur incidunt magnam
          blanditiis distinctio voluptates, provident libero exercitationem
          eligendi! Odio repellendus cumque, soluta quisquam numquam sunt.
        </p>
        <Link className="postLink" href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default postCard;
