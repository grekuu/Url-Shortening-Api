import "./Header.scss";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Container from "react-bootstrap/Container";

const Header = () => {
  const [hamburgetActive, setHamburgetActive] = useState<Boolean>(false);

  return (
    <Container>
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
          <button>Login</button>
          <button className="button-cyan">Sign Up</button>
        </div>
      </div>
      {hamburgetActive ? (
        <div className="mobile-href">
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
          <hr />
          <a>Login</a>
          <a className="a-cyan">Sign Up</a>
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Header;
