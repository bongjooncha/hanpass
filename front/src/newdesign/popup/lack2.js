import React, { useState, useEffect } from "react";
import "./lack2.css";
import img1 from "../../png/main_img/dollor_send.png";
import img2 from "../../png/main_img/qr.png";
import img3 from "../../png/main_img/won_send.png";

function Lack2() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index every 0.1 seconds
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 150);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="lackup2">
      <div id="lackbox">
        <img src={images[index]} alt={`Image ${index + 1}`} />
      </div>
    </div>
  );
}

export default Lack2;
