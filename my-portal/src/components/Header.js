import React, { useState, useEffect } from "react";

function Header(props) {
  //hooks
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const countHandler = function () {
    setCount(count + 1);
    setIsActive(true);
  };

  console.log("header", props);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  /**Return*/
  return (
    <div className="Header">
      <header id="header">
        <div className="logo">
          <span className="icon fa-gem" />
        </div>
        <div className="content">
          <div className="inner">
            <h1>Sid's Hub {props.active}</h1>
            <p>
              A fully responsive site template designed by{" "}
              <a href="https://html5up.net">HTML5 UP</a> and released
              <br />
              for free under the{" "}
              <a href="https://html5up.net/license">Creative Commons</a>{" "}
              license.
            </p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#intro" onClick={countHandler}>
                Intro
              </a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {/*<li><a href="#elements">Elements</a></li>*/}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
