import headCharacter from "../assets/images/head-character.png";

export default function CTA() {
  return (
    <section className="cta-section reveal">
      <div className="art">
        <img
          src={headCharacter}
          alt="Ready to make learning fun illustration"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div>
        <h2>Ready for make learning fun!</h2>
        <button className="signup-btn">Sign up for free</button>
      </div>
    </section>
  );
}
