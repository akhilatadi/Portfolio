import React from "react";
import "./Project1.css";

function Project1({ id, title, desc, image, url }) {
  return (
    <div className="project">
      <div className="project_left">
        <div className="project_title">
          <p>{title}</p>
        </div>
        <div className="project_desc">
          <p>{desc}</p>
        </div>

        <div className="project_button">
          <button type="button" class="btn">
            <a className="project_link" href={url}>
              Visit            </a>
          </button>
        </div>
      </div>

      <div className="project_right">
        <div className="project_imageContainer">
          <img className="project_image" src={image} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Project1;
