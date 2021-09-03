import React from "react";
import "./designer.css";

const Designer = () => {
  return (
    <div className="article article-main ">
      <div className="article__inner">
        <div className="main-section text">
          <h2 className="article__overlay-title separator article__overlay-title--overlay h2 has-animated">
            Design your idea
          </h2>
          <div className=" article-subtitle">
            <p>Submit your design and discover: pricing, timing!</p>
          </div>
          <a href="/" className="button">
            Design
          </a>
        </div>
      </div>
    </div>
  );
};
export default Designer;
