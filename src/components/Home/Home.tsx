import "./Home.scss";
import Container from "react-bootstrap/Container";
import working from "../../images/illustration-working.svg";

const Home = () => {
  return (
    <Container>
      <div className="home-top">
        <div className="home-top-left">
          <div className="title">More than just shorter links</div>
          <div className="description">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </div>
          <button>Get Started</button>
        </div>
        <div className="home-top-right">
          <img src={working} alt="working" />
        </div>
      </div>

      <div className="home-mid">
        <input type="text" placeholder="Shorten a link here..." />
        <button className="button-cyan-mid">Shorten it!</button>
      </div>
    </Container>
  );
};

export default Home;
