const AUDIENCE = [
  {
    icon: "📖",
    color: "var(--blue)",
    title: "At school",
    text: "Engaging group and distance learning for teachers and students.",
  },
  {
    icon: "🎓",
    color: "var(--yellow)",
    title: "At work",
    text: "For training, e-learning, interactive presentations and more.",
  },
  {
    icon: "🏠",
    color: "var(--teal)",
    title: "At home",
    text: "Apps and games for family fun or home study.",
  },
  {
    icon: "📱",
    color: "var(--red)",
    title: "Learning apps",
    text: "Engage kids with the Kahoot! family of learning apps.",
  },
];

export default function Audience() {
  return (
    <section className="who-section reveal">
      <h2 className="section-title">
        Who is Kurtis for?
      </h2>
      <div className="cards">
        {AUDIENCE.map((item) => (
          <div className="card" key={item.title}>
            <div className="icon-circle" style={{ background: item.color }}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#">Learn more</a>
          </div>
        ))}
      </div>
      <button className="sign-now">SIGN UP NOW</button>
    </section>
  );
}
