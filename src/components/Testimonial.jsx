import { useState } from "react";

const TESTIMONIALS = [
  {
    quote: "I love these games!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&grayscale",
    name: "Martha | Norwegian Air",
    body: [
      "Recusandae sunt voluptate repellat velit dolorem eos nostrum cupiditate. Labore porro cupiditate reiciendis enim neque. Modi eos autem expedita voluptatibus dignissimos repellat.",
      "Sit et aut minus quod vitae. Aut occaecati cupiditate neque dolore amet beatae quasi aliquam.",
    ],
    logo: "norwegian",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(1);
  const t = TESTIMONIALS[0];

  return (
    <section className="testimonial-section reveal">
      <h2 className="section-title">Our best customers</h2>
      <div className="testimonial-card">
        <div>
          <div className="bubble">{t.quote}</div>
          <img className="testi-avatar" src={t.avatar} alt={t.name} />
        </div>
        <div className="testi-info">
          <div className="name">{t.name}</div>
          {t.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <span className="testi-logo">{t.logo}</span>
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
