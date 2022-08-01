import React from "react";
import "../Style/Services.css";
import "../Style/InterestCard.css";
import "../Animation/Animation.js";
export default function NavBar() {
  return (
    <div>
      <p className="services-p">SERVICES</p>
      <div className="grid-services reveal">
        <div className="Block">
          <div>
            <i className="bx bx-paint paint"></i>
          </div>
          <div>
            <h2>UI/UX Design</h2>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            similique illum voluptatem sequi nostrum perspiciatis dicta
            voluptatum corporis eius perferendis. Tempore debitis temporibus
            quos nihil quam enim error fugit quas libero facere hic esse,
            fugiat, deleniti, dicta iure sequi quasi!
          </div>
        </div>
        <div className="Block1">
          <div>
            <i className="bx bx-expand-horizontal"></i>
          </div>
          <div>
            <h2>Web Development</h2>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            similique illum voluptatem sequi nostrum perspiciatis dicta
            voluptatum corporis eius perferendis. Tempore debitis temporibus
            quos nihil quam enim error fugit quas libero facere hic esse,
            fugiat, deleniti, dicta iure sequi quasi!
          </div>
        </div>
        <div className="Block">
          <div>
            <i className="bx bxl-wordpress wordpress"></i>
          </div>
          <div>
            <h2>Wordpress Design</h2>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            similique illum voluptatem sequi nostrum perspiciatis dicta
            voluptatum corporis eius perferendis. Tempore debitis temporibus
            quos nihil quam enim error fugit quas libero facere hic esse,
            fugiat, deleniti, dicta iure sequi quasi!
          </div>
        </div>
      </div>
    </div>
  );
}
