import { useState } from "react";
import "./Header.scss";
export const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <header className="header x center sp-btw">
      <div className="header__brand">
        <span className="header__brand--first">Bad </span>
        <span className="header__brand--second">Experience</span>
      </div>
      <div className="header__items center y">
        <span className="header__items--open" onClick={handleClick}>{visible ? "-" : "+"}</span>
        {visible && (
          <div className="header__menu y">
            <span>
              <a href="#">Share</a>
            </span>
            <span>
              <a href="#">About</a>
            </span>
            <span>
              <a href="#">Contact</a>
            </span>
          </div>
        )}
      </div>
    </header>
  );
};
