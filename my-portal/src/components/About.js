import React from "react";

function About() {
  return (
    <div className="About">
      <div id="about">
        <h2 className="major">About</h2>
        <span className="image main">
          <img src={require("../images/pic03.jpg")} />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
          eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
          volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero
          et malesuada fames ac ante ipsum primis in faucibus. Cras viverra
          ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default About;
