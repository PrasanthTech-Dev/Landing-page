import eyeMonster from "../assets/images/eye-monster.png";
import personThunder from "../assets/images/person-thunder.png";
import handPin from "../assets/images/hand-pin.png";

const STEPS = [
  {
    img: eyeMonster,
    title: "Create",
    text: "It only takes minutes to create a learning game or trivia quiz on any topic, in any language.",
  },
  {
    img: personThunder,
    title: "Host or share",
    text: "Host a live game with questions on a big screen or share a game with remote players.",
  },
  {
    img: handPin,
    title: "Play",
    text: "Game on! Join a kahoot with a PIN provided by the host and answer questions on your device.",
  },
];

export default function Features() {
  return (
    <>
      <div className="features-link reveal">
        Still more? <a href="#">Take a look to our features games</a>
      </div>
      <section className="how-section">
        <h2 className="section-title" style={{ display: "block", textAlign: "center" }}>
          How does Kurtis work?
        </h2>
        {STEPS.map((step) => (
          <div className="how-row reveal" key={step.title}>
            <div className="art">
              <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <div className="text">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
