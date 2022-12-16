import "./Header.scss";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [hamburgetActive, setHamburgetActive] = useState<Boolean>(false);

  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={logo} alt="logo" />
          <a className="header-href">Features</a>
          <a className="header-href">Pricing</a>
          <a className="header-href">Resources</a>
        </div>
        <div className="header-right">
          <FaBars
            className="hamburger"
            onClick={() => setHamburgetActive(!hamburgetActive)}
          ></FaBars>
        </div>
      </div>
      {hamburgetActive ? (
        <div className="mobile-href">
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Header;
