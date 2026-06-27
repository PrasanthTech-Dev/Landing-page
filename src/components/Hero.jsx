import laptop from "../assets/images/laptop.png";

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-text">
        <h1>Make <br /> learning fun!</h1>
        <p>Any subject, in any language, on any <br /> device, for all ages!</p>
        <button className="signup-btn">Sign up for free</button>
        <div className="apps-label">Or download the app:</div>
        <div className="app-badges">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="App Store"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
        </div>
      </div>
      <div className="hero-art">
        <img src={laptop} alt="Laptop illustration" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </section>
  );
}
