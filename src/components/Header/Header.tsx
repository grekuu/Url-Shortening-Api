import "./Header.scss";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="logo" />
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
      </div>
      <div className="header-right">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
