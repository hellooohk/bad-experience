import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/magnifying-glass.png";
import "./Header.scss";
export const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <header className="header x center sp-btw">
      <Link to="/" className="header__brand">
        <span className="header__brand--first">Bad </span>
        <span className="header__brand--second">Experience</span>
      </Link>
      <div className="header__searchBar x center">
         <input type="text" placeholder="Start typing..."/>
      <img src={Icon} alt="" />
      </div>
      <div className="header__items center y">
        <span className="header__items--open" onClick={handleClick}>{visible ? "✕" : "+"}</span>
        {visible && (
          <div className="header__menu y">
            <span onClick={handleClick}>
              <Link to="share">Share</Link>
            </span>
            <span onClick={handleClick}>
              <a href="#">About</a>
            </span>
            <span onClick={handleClick}>
              <a href="#">Contact</a>
            </span>
          </div>
        )}
      </div>
    </header>
  );
};
