import "./Home.scss";
import "./HomeMid.scss";
import Container from "react-bootstrap/Container";
import working from "../../images/illustration-working.svg";
import logo1 from "../../images/icon-brand-recognition.svg";
import logo2 from "../../images/icon-detailed-records.svg";
import logo3 from "../../images/icon-fully-customizable.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAsyncURL, getAllUrls } from "../../redux/urlSlice";
import { useState } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const urls = useAppSelector(getAllUrls);

  const [urlToConvert, setUrlToConvert] = useState<string>("");

  function shortenLink() {
    dispatch(fetchAsyncURL(urlToConvert));
  }

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
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={(e) => setUrlToConvert(e.target.value)}
        />
        <button className="button-cyan-mid" onClick={shortenLink}>
          Shorten it!
        </button>
      </div>

      <div>
        {urls.map((url, id) => {
          return (
            <div className="shorterUrls" key={id}>
              <div>{url.full_short_link}</div>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(`${urls[id].full_short_link}`)
                }
              >
                Copy
              </button>
            </div>
          );
        })}
      </div>

      <div className="home-bottom-mid">
        <div className="title">Advanced Statistics</div>
        <div className="description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
        <div className="three-logos">
          {/* Logo 1 */}
          <div className="logo logo-1">
            <div className="logo-left">
              <div className="logo-background">
                <img src={logo1} alt="logo1" />
              </div>
              <div className="logo-title">Brand Recognition</div>
              <div className="logo-description">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </div>
            </div>
            <div className="center-hr">
              <hr className="logo-hr hide-mobile" />
            </div>
          </div>
          {/* Logo 2 */}
          <div className="logo logo-2">
            <div className="logo-left">
              <div className="logo-background">
                <img src={logo2} alt="logo2" />
              </div>
              <div className="logo-title">Detailed Records</div>
              <div className="logo-description">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </div>
            </div>
            <div className="center-hr">
              <hr className="logo-hr hide-mobile" />
            </div>
          </div>
          {/* Logo 3 */}
          <div className="logo logo-3">
            <div className="logo-left">
              <div className="logo-background">
                <img src={logo3} alt="logo3" />
              </div>
              <div className="logo-title">Fully Customizable</div>
              <div className="logo-description">
                Improve brand awarness and content discoverability through
                customizable links, supercharging audience engagement.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
