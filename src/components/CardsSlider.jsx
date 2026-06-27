import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { variant: "blue", title: "Kurtis Classroom", text: "The next generation of learning." },
  { variant: "dark", title: "Kurtis Classroom", text: "The next generation of corporate learning." },
  { variant: "yellow", title: "Premium for schools", text: "Create and teach better lessons students will love.", badge: "New" },
  { variant: "blue", title: "Kurtis at Home", text: "Family game night, reimagined." },
];

export default function CardsSlider() {
  const trackRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth <= 768 ? 1 : 3);
  const [index, setIndex] = useState(1);

  const totalDots = Math.max(SLIDES.length - visibleCount + 1, 1);

  useEffect(() => {
    function handleResize() {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 3);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % totalDots);
    }, 4000);
    return () => clearInterval(id);
  }, [totalDots]);

  useEffect(() => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.children[0]?.getBoundingClientRect().width + 16 || 0;
    trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index, visibleCount]);

  return (
    <section className="carousel-section reveal">
      <h2 className="section-title">Amazing things are happening</h2>
      <div className="carousel-wrap">
        <div className="carousel-track" ref={trackRef}>
          {SLIDES.map((slide, i) => (
            <div className={`carousel-card ${slide.variant}`} key={i}>
              {slide.badge && <span className="badge">{slide.badge}</span>}
              <div className="content">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <a href="#" style={slide.variant === "yellow" ? { color: "var(--ink)" } : undefined}>
                  Learn more
                </a>
              </div>
              {slide.variant === "dark" && (
                <div
                  className="carousel-img"
                  style={{ background: "linear-gradient(120deg,#2a2937,#1c1b29)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="dots">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
